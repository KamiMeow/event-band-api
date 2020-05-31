import gravatar from 'gravatar';
import soketIo from 'socket.io';
import jwt from 'jsonwebtoken';
import User from '../app/User/User';
import AuthorizedUser from '../app/User/AuthorizedUser';
import ChatMessage from '../app/Chat/ChatMessage/ChatMessage';
import Chat from '../app/Chat/Chat/Chat';

const getConnectionsCount = io => Object.keys(io.sockets.connected).length;

function getCurrentUser(socket) {
  const token = socket.handshake.headers.authorization;
  if (!token) {
    return { error };
  };

  jwt.verify(token, 'secret', async (err, authorizedData) => {
    const {
      authUserUUID,
      userUUID,
    } = authorizedData;

    const authUser = await AuthorizedUser.getByUUID(authUserUUID);
    const user = await User.getByUUID(userUUID);
    const UserId = user.id;

    const currentUser = {
      authUuid: authUserUUID,
      userUuid: userUUID,
      email: user.email,
      nickname: authUser.nickname,
      avatar: gravatar.url(user.email, { s: 200 }),
    };

    return {
      currentUser,
      UserId,
    };
  });
}

export default server => {
  const io = soketIo(server, {
    handlePreflightRequest: (req, res) => {
      const currentUrl = process.env.NODE_ENV === 'production'
        ? 'https://event-band-api.ru'
        : 'http://localhost:8080';

      const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Origin': currentUrl,
        'Access-Control-Allow-Credentials': true,
      };
      res.writeHead(200, headers);
      res.end();
    },
  });

  io.on('connection', async (socket) => {
    const { chatUuid } = socket.handshake.query;
    const {
      currentUser,
      UserId,
      error,
    } = getCurrentUser(socket);

    const chat = await Chat.getByUUID(chatUuid);
    if (error) {
      return socket.emit('error', error);
    }
    if (!chat) {
      return socket.emit('error', 'chat not found');
    }
    if (!currentUser) {
      return socket.emit('error', 'user not found');
    }

    socket.broadcast.emit('joined', {
      connections: getConnectionsCount(io),
      user: currentUser,
    });

    socket.emit('connections', getConnectionsCount(io));

    socket.on('send', async (message) => {
      try {
        console.log('message', message, UserId, chat.id);
        await ChatMessage.create({
          ChatId: chat.id,
          message,
          UserId,
        });

        console.log('inbox', {
          ...currentUser,
          createdAt: new Date(),
          isOwn: false,
        }, message);

        socket.broadcast.emit('inbox', {
          user: {
            ...currentUser,
            createdAt: new Date(),
            isOwn: false,
          },
          message,
        });
      } catch (error) {
        console.error(error);
        socket.emit('error', error);
      }
    });

    socket.on('leave-chat', async () => {
      socket.disconnect(true);

      io.sockets.emit('connections', getConnectionsCount(io));
      io.sockets.emit('user-leave', {
        connections: getConnectionsCount(io),
        user: currentUser,
      });
    });

    // socket.on('disconnect', async () => {
    //   socket.emit('connections', getConnectionsCount(io));
    //   socket.disconnect(true);

    //   io.sockets.emit('user-leave', {
    //     connections: getConnectionsCount(io),
    //     user: currentUser,
    //   });
    // });
  });
};
