const EggImage = require("../models/egg");

const getAllEggs = async (req, res) => {
  const eggs = await EggImage.find({});

  res.status(200).json({ eggs });
};

module.exports = { getAllEggs };
