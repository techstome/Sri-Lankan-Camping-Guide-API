import express from "express";
import { createCampsite, deleteCampsite, getAllCampsites, getCampsite, updateCampsite } from "../controllers/campsiteController.js";
import campsite from "../models/campsite.js";
import { createError } from "./utils/error.js";

const router = express.Router();

//create
router.post("/", createCampsite)
//update
router.put("/:id", updateCampsite)
//delete
router.delete("/:id", deleteCampsite)
//get
router.get("/:id", getCampsite)  
//get all
router.get("/", getAllCampsites)

export default router