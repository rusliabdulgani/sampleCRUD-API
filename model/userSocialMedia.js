const connectDb = require("./index");
const { DataTypes } = require("sequelize");
const UserModel = require("./user");

const UserSocialMediaModel = connectDb.define(
  "user_social_media",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    social_media_id: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = UserSocialMediaModel;
