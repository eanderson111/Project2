module.exports = function(sequelize, DataTypes) {
    const Skill = sequelize.define('Skill', {
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
  
