const User = require("../../models/User");

const signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password, username } = req.body;
    const user = await User.findOne({ where: { email } });

    // check if the user already exist - if exist return error
    if (user) {
      console.log(
        `[ERROR]:Failed to create user | Account already exists with email: ${email}`
      );
      return res.status(500).json({ success: false });
    }

    // user not exist - creat obj with user sign up info
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      username,
    });

    if (!newUser) {
      return res.status(404).json({
        error: "Unable to create a user",
      });
    }

    return res.json({ success: "user created" });
  } catch (error) {
    console.log(`[Error]:Failed to create user | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = User.findOne({ where: { email } });

    // check if the user not signed up - if email not exist
    if (!user) {
      console.log(`[ERROR]:Failed to create user | User does not exists`);
      return res.status(500).json({ success: false });
    }

    // check if the password is correct
    const isAuthorized = await User.checkPassword(password);
    if (isAuthorized) {
      return res.status(200).json({ success: "Login successful" });
    } else {
      console.log("Invalid password");
      return res.status(500).json({ error: "Failed to login" });
    }
  } catch (error) {
    console.log(`[Error]:Failed to log in user | ${error.message}`);

    return res.status(500).json({ error: "Failed to login" });
  }
};

const logout = (req, res) => {
  return res.json("logout");
};

module.exports = {
  signup,
  login,
  logout,
};
