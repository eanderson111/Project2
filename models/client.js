module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("client", {
    first_name: DataTypes.STRING,
    last_name:  DataTypes.STRING,
    address: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    zip: DataTypes.TEXT,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,

  });
  return Client;
};
