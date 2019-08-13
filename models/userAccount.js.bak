module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },

  });

  //   Sets up foreign keys on Userid with other models and deletes if User is deleted
  User.associate = function (models) {
    User.hasMany(models.Trip, {
      onDelete: 'cascade'
    });
  };
  return User;
};
