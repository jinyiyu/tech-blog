const getAllBlogs = (req, res) => {
  return res.json({
    success: true,
    data: [],
  });
};

const getBlog = (req, res) => {
  return res.json({
    success: true,
    data: {},
  });
};

const createBlog = (req, res) => {
  return res.json("createBlog");
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlog,
};
