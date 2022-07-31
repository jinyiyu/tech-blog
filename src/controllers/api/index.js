const Blog = require("../../models/Blog");

const getAllBlogs = async (req, res) => {
  try {
    const data = await Blog.findAll({});
    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.log(`[Error]:Failed to create user | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const getBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Blog.findByPk(id);

    if (!data) {
      res.status(404).json({ success: false, message: "Cannot find the blog" });
    }

    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.log(`[Error]:Failed to create user | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, body } = req.body;

    // hardcoded for now, to change later
    const userId = 2;

    await Blog.create({
      title,
      body,
      userId,
    });
    return res.json({ success: true, message: "Blog created" });
  } catch (error) {
    console.log(`[Error]:Failed to create user | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlog,
};
