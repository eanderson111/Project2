module.exports = function(sequelize, DataTypes) {
    const UserSkill = sequelize.define('UserSkill', {
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
      skillId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Skill',
          key: 'id'
        }
      }
    });
    return UserSkill;
  };

