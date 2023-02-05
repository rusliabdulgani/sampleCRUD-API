const UserModel = require("../model/user");
const UserSocialMediaModel = require("../model/userSocialMedia");

module.exports = {
  getUserWithUser: async (req, res) => {
    let { id } = req.params;
    try {
      let getOneUser = await UserModel.findByPk(id, {
        include: UserSocialMediaModel,
      });
      res.send(getOneUser);
    } catch (e) {
      res.send(e);
    }
  },
  getAllUser: async (req, res) => {
    try {
      let allUser = await UserModel.findAll();
      res.send(allUser);
    } catch (e) {
      res.send(e);
    }
  },
  createUser: async (req, res) => {
    let { user_name, first_name, last_name, email } = req.body;
    try {
      let createUser = await UserModel.create({
        user_name,
        first_name,
        last_name,
        email,
      });
      res.send(createUser);
    } catch (e) {
      res.send(e);
    }
  },
  updateUser: async (req, res) => {
    let { id } = req.params;
    let { user_name, first_name, last_name, email } = req.body;
    try {
      let user = await UserModel.update(
        {
          user_name,
          first_name,
          last_name,
          email,
        },
        { where: { id } }
      );
      res.send(user);
    } catch (e) {
      res.send(e);
    }
  },
  deleteUser: async (req, res) => {
    let { id } = req.params;
    console.log("id...", id);
    try {
      let deleteUser = await UserModel.destroy({ where: { id } });

      if (deleteUser == 0) {
        return res.send({ success: false, desc: "user not found" });
      }
      res.send({ success: true, desc: "success delete user" });
    } catch (e) {
      console.log("error...", e);
      res.send(e);
    }
  },
};
