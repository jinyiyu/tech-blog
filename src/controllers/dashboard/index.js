const getMyDashboard = (req, res) => {
  return res.json({
    success: true,
    data: ["myDashboard"],
  });
};

module.exports = {
  getMyDashboard,
};
