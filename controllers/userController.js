const userSchema = require("../models/userSchema");

class AuthService {
  async userRegister(req, res) {
    try {
      const { name, email, password, shop } = req.body;
      const userExists = userSchema.find({ email });
      if (userExists) {
        return res
          .status(403)
          .json({ error: true, msg: "user already exists" });
      } else {
        const useradd = new userSchema(req.body);
        const usersave = useradd.save();
        return res.status(200).json({
          error: false,
          msg: "User registered successfully!",
          data: usersave,
        });
      }
    } catch (error) {
      return res.status(403).json({ error: true, msg: error.message });
    }
  }
}

module.exports = AuthService;
