module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{
          args:true,
          msg:"First name required"
          },
          is:{
            args:["^[a-z]+$",'i'],
            msg:"Only letters allowed in first name"
          },
          len: {
            args: 3,
            msg: "Name must be at least 3 characters in length"
          }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{
          args:true,
          msg:"Last name required"
          },
          is:{
            args:["^[a-z]+$",'i'],
            msg:"Only letters allowed in last name"
          },
          len: {
            args: 3,
            msg: "Name must be at least 3 characters in length"
          }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: { min: -90, max: 90 }
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: { min: -180, max: 180 }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          len: {
              args: [6, 128],
              msg: "Email address must be between 6 and 128 characters in length"
          },
          isEmail: {
              msg: "Email address must be valid"
          }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: {
              args: 3
          }
      }
  }
  });
  User.associate = function(models) {
    User.belongsToMany(models.Skill, {
      through: 'UserSkill',
      as: 'user',
      foreignKey: 'userId'
    });
    User.hasMany(models.Ticket, {
      as: 'toUser',
      onDelete: "cascade"
    });
    User.hasMany(models.Ticket, {
      as: 'fromUser',
      onDelete: "cascade"
    })
  };
  return User;
};
