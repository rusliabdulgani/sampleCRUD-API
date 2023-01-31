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
};
