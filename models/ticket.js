module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        submitted_by: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fulfilledBy: DataTypes.INTEGER,
        skill_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        emergency: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        work_category: DataTypes.STRING,
        schedule: DataTypes.STRING,
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
  
    Ticket.associate = function(models) {
      // We're saying that a Ticket should belong to an Author
      // A Ticket can't be created without an Author due to the foreign key constraint
      Ticket.belongsTo(models.User, {
          foreignKey: 'fromUser'
      });
      Ticket.belongsTo(models.User, {
        foreignKey: 'toUser'
      });
  };
  return Ticket;
};
