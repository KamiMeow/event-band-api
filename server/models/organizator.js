import uuid from 'uuid/v4';

export default (sequelize, DataTypes) => {
  const Organizator = sequelize.define('Organizator', {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      validate: {
        isUUID: 4,
      },
    },
    status: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    orgId: {
      type: DataTypes.INTEGER,
    },
  }, {});

  Organizator.associate = models => {
    // associations can be defined here
  };

  Organizator.beforeCreate(organizator => organizator.uuid = uuid());
  return Organizator;
};