module.exports = function(sequelize, DataTypes) {
    const UserFavor = sequelize.define('UserFavor', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
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

