export default (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      validate: {
        isUUID: 4,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter event name',
      },
      validate: {
        len: {
          args: [0, 100],
          msg: 'Event name must be less than 100',
        },
      },
    },
    description: DataTypes.TEXT,
    count: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please enter the cont of participants in the event',
      },
      defaultValue: 0,
    },
    datetimeTo: {
      type: DataTypes.DATE,
      allowNull: {
        args: false,
        msg: 'Please enter the event start date',
      },
    },
    coords: {
      type: DataTypes.GEOMETRY('POINT'),
      validation: {
        isValidCoordinates(value) {
          const validCoordinates = /^([-+]?)([\d]{1,2})(((\.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((\.)(\d+))?)$/;
          if (!value.match(validCoordinates)) {
            throw new Error('Invalid coordinate format');
          }
        }
      }
    },
    datetimeFrom: DataTypes.DATE,
    orgId: {
      type: DataTypes.INTEGER,
    },
  }, {});

  Event.associate = models => {
    // associations can be defined here
    Event.hasMany(models.Ticket);
    Event.hasMany(models.Tag);
    Event.hasMany(models.Subscriber);
  };
  return Event;
};