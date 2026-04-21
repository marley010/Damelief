import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  sendContactEmail,
  sendAfspraakEmail,
} from "./src/utils/emailService.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

app.post("/api/send-contact", async (req, res) => {
  try {
    const { firstname, lastname, email, phone, message } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email address required" });
    }

    const fullName = `${firstname} ${lastname}`;
    const result = await sendContactEmail(email, fullName, phone, message);
    res.json({ success: true, messageId: result.id });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/send-afspraak", async (req, res) => {
  try {
    const { firstname, lastname, email, phone, date, message } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email address required" });
    }

    const fullName = `${firstname} ${lastname}`;
    const result = await sendAfspraakEmail(
      email,
      fullName,
      phone,
      date,
      message,
    );
    res.json({ success: true, messageId: result.id });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: error.message });
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
