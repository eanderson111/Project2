module.exports = function(sequelize, DataTypes) {
    const Skill = sequelize.define('Skill', {
        description: DataTypes.STRING
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
  
