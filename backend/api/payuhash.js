import express from "express";
import crypto from "crypto";

const router = express.Router();

// ✅ Your Test Credentials from environment variables
const key = process.env.PAYU_KEY || "uWkEEH";
const salt = process.env.PAYU_SALT || "AdMkAcEHOieHcOCmUf9Z5x2lapCSV0Oo";

router.post("/", (req, res) => {
  const { txnid, amount, productinfo, firstname, email } = req.body;

  // Hash sequence for PayU
  const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
  const hash = crypto.createHash("sha512").update(hashString).digest("hex");

  res.json({ hash, key });
});

export default router;
