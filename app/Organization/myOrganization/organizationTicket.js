import Router from "../../Base/Router";
import Ticket from '../../Ticket/Ticket';

const organizationTicket = new Router();

/**
 * Путь для создания билета к события
 */
organizationTicket.post('/create', (req, res) => {
  Ticket.create(req.body, (message, ticket) => {
    if (message) {
      return res.status(400).send({ message });
    }

    return res.status(200).send({ ticket });
  });
});

/**
 * Редактирование билета по его uuid
 */
organizationTicket.put('/:uuid', async (req, res) => {
  const { uuid } = req.params;
  const ticket = await Ticket.getByUUID(uuid);
  if (!ticket) {
    return res.status(404).send({
      message: 'ticket not found',
    });
  }

  Ticket.update(
    req.body,
    { uuid },
    async (message) => {
      if (message) {
        return res.status(400).send({ message });
      }

      const ticket = await Ticket.getByUUID(uuid);
      return res.status(200).send({ ticket });
    }
  );
});

/**
 * Удаление конкретного билета по его uuid
 */
organizationTicket.delete('/:uuid', (req, res) => {
  const { uuid } = req.params;

  res.status(200).send({ uuid });
});

export {
  organizationTicket,
};
