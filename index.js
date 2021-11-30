import express from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url)

const _dirname = dirname(_filename);
const authorsFilePath = path.join(_dirname, "authors.json");

const router = express.Router();

// 1
router.get("/", async (req, res) => {
  try {
      const fileAsBuffer = fs.readFileSync(authorsFilePath)
      const fileAsString = fileAsBuffer.toString();
      const fileAsJSON = JSON.parse(fileAsString)
      res.send(fileAsJSON)
  } catch (error) {
    res.send(500).send({ message: error.message });
  }
});




export default router;
