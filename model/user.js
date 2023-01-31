const connectDb = require("./index");
const { DataTypes } = require("sequelize");
const UserSocialMediaModel = require("./userSocialMedia");

const UserModel = connectDb.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, 
  {
    freezeTableName: true,
    timestamps: false,
  }
);

UserModel.hasOne(UserSocialMediaModel, {
  foreignKey: "user_id",
});

UserSocialMediaModel.belongsTo(UserModel, {
  foreignKey: "user_id",
});

module.exports = UserModel;
