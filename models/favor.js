module.exports = function(sequelize, DataTypes) {
    const Favor = sequelize.define('Favor', {
        description: DataTypes.STRING
    });
    Favor.associate = function(models) {
      Favor.belongsToMany(models.User, {
        through: 'UserFavor',
        as: 'favor',
        foreignKey: 'favorId'
      });
    };
    return Favor;
  };
  
