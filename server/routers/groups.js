import express from "express";
import { addGroup,deleteGroup,getGroups } from "../controllers/group.js";
const router=express.Router();
router.post('/add',addGroup);
router.post('/delete',deleteGroup);
router.get('/',getGroups)

export default router;