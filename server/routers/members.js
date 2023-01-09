import express from "express";
import { getMembers,addMember} from "../controllers/members.js";
const router=express.Router();

router.post('/',getMembers);
router.post('/add',addMember)
export default router;