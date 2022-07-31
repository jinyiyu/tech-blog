const Blog = require("../../models/Blog");

const getMyDashboard = async (req, res) => {
  try {
    // change this hard coded userId later
    userId = 1;
    const data = await Blog.findAll({ where: { id: userId } });

    if (!data) {
      res
        .status(404)
        .json({ success: false, message: "Cannot find the dashboard" });
    }

    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.log(`[Error]:Failed to get dashboard | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = {
  getMyDashboard,
};
