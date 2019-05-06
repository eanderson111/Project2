module.exports = function(sequelize, DataTypes) {
    const UserFavor = sequelize.define('UserFavor', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      favorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Favor',
          key: 'id'
        }
      }
    });
    return UserFavor;
  };

