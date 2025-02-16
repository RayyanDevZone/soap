import dotenv from "dotenv";
dotenv.config();

import express, { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sendEmail from "../backend/utils/SendEmail.js";
import axios from "axios";
import serverless from "serverless-http";

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("hello from server");
});

app.post("/api/sendemail", async (req, res) => {
  const { email, name } = req.body;
  console.log("Received Name:", name); // Debugging: Check if name is received
  try {
    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = process.env.EMAIL_USER;
    const subject = "Thank you for registering";
    const message = `<h1>Hello ${name}</h1>
      <p>Thank you for registering with us</p>
      <p>Best regards</p>`;

    await sendEmail(subject, message, send_to, sent_from, reply_to);
    console.log("Email sent successfully");

    // Send user details to Slack
    const slackMessage = {
      text: `New registration:\n*Name:* ${name}\n*Email:* ${email}`,
    };

    try {
      console.log("Sending Slack notification:", slackMessage); // Log Slack message payload
      const slackResponse = await axios.post(process.env.SLACK_WEBHOOK_URL, slackMessage);
      console.log("Slack notification sent successfully:", slackResponse.data);
      res.status(200).json({ success: true, message: "Email sent and Slack notification sent successfully" });
    } catch (slackError) {
      if (slackError.response) {
        // Log the response data from Slack for debugging
        console.error("Slack API response error:", slackError.response.data);
      } else {
        console.error("Error sending Slack notification:", slackError.message);
      }
      res.status(500).json({ message: "Error sending Slack notification", error: slackError.message });
    }
  } catch (error) {
    console.error("Error in /api/sendemail route:", error); // Log the specific error for debugging
    res.status(500).json({ message: error.message });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// If you need serverless functionality, use this instead:
export const handler = serverless(app);
