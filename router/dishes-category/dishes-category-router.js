import express from "express";

const router = express.Router();

router.post("/create", async (request, response) => {
  response.status(200).json({ message: "dishes category created" });
});
router.get("/get", async (request, response) => {
  response.status(200).json({ message: "dishes category get" });
});
router.put("/update", async (request, response) => {
  response.status(200).json({ message: "dishes category update" });
});
router.delete("/delete", async (request, response) => {
  response.status(200).json({ message: "dishes category delete" });
});
export default router;
