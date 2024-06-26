import { Router } from "express";
import {
  addEvent,
  deleteEvent,
  findById,
  findAndSearchEvents,
  updateEvent,
} from "../controller/event.controller";
const router = Router();

router.post("/", addEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.get("/:id", findById);
router.get("/", findAndSearchEvents);

export default router;
