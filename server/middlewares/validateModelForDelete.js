import Rig from "../models/rig.model.js";

const validateModelForDelete = async (req, res, next) => {
  try {
    const searchModel = await Rig.findOne({
      model: req.params.model.toUpperCase(),
    });

    if (searchModel !== null) {
      next();
    } else {
      res.status(401).json({ msg: "Model does not existt" });
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

export default validateModelForDelete;
