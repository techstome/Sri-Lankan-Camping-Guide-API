import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/UserController.js";
import User from "../models/User.js";
import { createError } from "./utils/error.js";

const router = express.Router();

//create
router.post("/", createUser)
//update
router.put("/:id", updateUser)
//delete
router.delete("/:id", deleteUser)
//get
router.get("/:id", getUser)  
//get all
router.get("/", getAllUsers)

export default router