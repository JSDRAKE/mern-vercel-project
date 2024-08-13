import express from "express";
import deleteRigContoller from "../controllers/deleteRigContoller.js";
import validateModelForDelete from "../middlewares/validateModelForDelete.js";

const router = express.Router();

router.delete("/:model", validateModelForDelete, deleteRigContoller.deleteRig);

export default router;
