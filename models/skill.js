module.exports = function(sequelize, DataTypes) {
    const Skill = sequelize.define('Skill', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      type: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false
        }
    });
    Skill.associate = function(models) {
      Skill.belongsToMany(models.User, {
        through: 'UserSkill',
        as: 'skill',
        foreignKey: 'skillId'
      });
    };
    return Skill;
  };
  
