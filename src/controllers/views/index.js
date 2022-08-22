const Blog = require("../../models/Blog");
const path = require("path");

const renderHomePage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/login.html");
  return res.sendFile(filePath);
};

const renderLoginPage = (req, res) => {
  return res.render("login");
};

const renderSignUpPage = (req, res) => {
  return res.render("signup");
};

const renderDashboardPage = async (req, res) => {
  // try {
  //   const userId = 1;
  //   const data = await Blog.findAll({ where: { userId } });
  //   return res.render("dashboard", { data });
  // } catch (error) {
  //   console.log(`[Error]:Failed to create user | ${error.message}`);

  //   return res.status(500).json({ success: false });
  // }
  const filePath = path.join(__dirname, "../../../public/dashboard.html");
  return res.sendFile(filePath);
};

const renderCreateBlogPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/createBlog.html");
  return res.sendFile(filePath);
};

const renderviewBlogPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/viewBlog.html");
  return res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderDashboardPage,
  renderCreateBlogPage,
  renderviewBlogPage,
};
