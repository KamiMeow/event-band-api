export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      validate: {
        isUUID: 4,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address',
      },
      unique: {
        args: true,
        msg: 'Email alredy exists',
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address',
        },
        notEmpty: {
          args: true,
          msg: 'Your email address can\'t be empty',
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name',
      },
      validate: {
        len: {
          args: [2, 30],
          msg: 'The length of the name must be less than 30 and more than 2',
        },
        notEmpty: {
          args: true,
          msg: 'Your name can\'t be empty',
        },
      },
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your surname',
      },
      validate: {
        len: {
          args: [2, 30],
          msg: 'The length of the surname must be less than 30 and more than 2',
        },
        notEmpty: {
          args: true,
          msg: 'Your surname can\'t be empty',
        },
      },
    }
  }, {
    // getterMethods: {
    //   fullName: () => this.name + ' ' + this.surname,
    // },
  });

  User.associate = models => {
    // associations can be defined here
    User.hasOne(models.AuthorizedUser);
    User.hasMany(models.Organizer);
    User.hasMany(models.ChatMessage);
    User.hasMany(models.Subscriber);
    User.hasMany(models.News);
  };
  return User;
};