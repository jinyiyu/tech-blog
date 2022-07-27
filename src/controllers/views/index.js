const path = require("path");

const renderHomePage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/index.html");
  return res.sendfile(filePath);
};

const renderLoginPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/login.html");
  return res.sendfile(filePath);
};

const renderSignUpPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/signUp.html");
  return res.sendfile(filePath);
};

const renderDashboardPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/dashboard.html");
  return res.sendfile(filePath);
};

const renderCreateBlogPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/createBlog.html");
  return res.sendfile(filePath);
};

const renderviewBlogPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/viewBlog.html");
  return res.sendfile(filePath);
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderDashboardPage,
  renderCreateBlogPage,
  renderviewBlogPage,
};
