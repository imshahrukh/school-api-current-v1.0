const Village_Name = require("./../model/VillageName");

// Methods
// addVilalge
// getAllVillage
// getMemeberByName
// getVillageByID
// addMember

exports.addVillage = async function (req, res) {
  try {
    const addVillage = await Village_Name.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        village: addVillage,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getAllVillages = async function (req, res) {
  try {
    var villages = await Village_Name.find();
    res.status(201).json({
      tatus: "success",
      data: {
        villages: villages,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.getVillageByID = async function (req, res) {
  villagN = req.params.id;
  console.log(villagN);
  try {
    var villageName = await Village_Name.find({ _id: villagN });
    res.status(201).json({
      tatus: "success",
      data: {
        village: villageName,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
