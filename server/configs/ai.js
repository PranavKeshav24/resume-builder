import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const ai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPEN_BASE_URL,
});

export default ai;
