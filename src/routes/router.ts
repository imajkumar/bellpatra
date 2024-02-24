import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.json({
    message: "Hello from Docker this is live 77  🎉",
  }),
);

router.get("/health", (req, res) => {
  throw new Error("Internal Server Error");
  res.status(200).json({ message: "Everything is good here 👀" });
});

export default router;
