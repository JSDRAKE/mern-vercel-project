import express from "express";
import getRigsController from "../controllers/getRigsController.js";
import validateModel from "../middlewares/validateModelForDelete.js";

const router = express.Router();

router.get("/:model", validateModel, getRigsController.getRigByModel);

export default router;
