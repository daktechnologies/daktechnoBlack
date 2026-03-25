import express from "express";
import { sendMail } from "../controller/resendController.js";

const resendRoute = express.Router();


resendRoute.post("/send-email", sendMail);

export default resendRoute;