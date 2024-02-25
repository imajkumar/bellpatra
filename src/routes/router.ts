import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.json({
    message: "Hello from Docker this ok k 🎉",
  }),
);



export default router;
