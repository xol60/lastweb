import express from "express";
import { getMembers,addMember,deleteMember} from "../controllers/members.js";
const router=express.Router();

router.get('/',getMembers);
router.post('/add',addMember)
router.post('/delete',deleteMember);
export default router;