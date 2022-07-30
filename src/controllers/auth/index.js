const signup = (req, res) => {
  return res.json("signup");
};

const login = (req, res) => {
  return res.json("login");
};

const logout = (req, res) => {
  return res.json("logout");
};

module.exports = {
  signup,
  login,
  logout,
};
