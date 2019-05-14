var bcrypt = require("bcrypt-nodejs");


module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    
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
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lat: {
      type: DataTypes.FLOAT(7,6),
      allowNull: false,
      validate: { min: -90, max: 90 }
    },
    lng: {
      type: DataTypes.FLOAT(7,6),
      allowNull: false,
      validate: { min: -180, max: 180 }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email address already in use!'
      },  
      validate: {
          len: {
              args: [6, 128],
              msg: "Email address must be between 6 and 128 characters in length"
          },
          isEmail: {
              args: true,
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

  // Creating a custom method for our User model. 
  //This will check if an unhashed password entered by the 
  //user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.beforeCreate( function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  
  User.associate = function(models) {
    User.belongsToMany(models.Skill, {
      through: 'UserSkill',
      as: 'user',
      foreignKey: 'userId'
    });
    User.hasMany(models.Ticket, {
      as: 'fulfilled_by',
      foreignKey: 'fulfilled_by',
      sourceKey: 'id',
      onDelete: "cascade"
    });
    User.hasMany(models.Ticket, {
      as: 'submitted_by',
      foreignKey: 'submitted_by',
      sourceKey: 'id',
      onDelete: "cascade"
    })
  };
  
  return User;
};
