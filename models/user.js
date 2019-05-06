module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    credit_card: DataTypes.STRING
  });
  User.associate = function(models) {
    User.belongsToMany(models.Favor, {
      through: 'UserFavor',
      as: 'favor',
      foreignKey: 'userId'
    });
  };
  return User;
};



