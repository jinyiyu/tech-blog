const getAllBlog = (req, res) => {
  return res.json({
    success: true,
    data: [],
  });
};

module.exports = {
  getAllBlog,
};
