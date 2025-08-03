"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function AiContent({
  text,
  contentGen = false,
  customInstruction = "",
}) {
  try {
   
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

    let prompt;
    if (contentGen == true) {
      prompt = `You are a senior content writer and an expert. 
      Your task is to write content on the following topic: "${text}". The content should be in the number points with properly formatted in 250 words.
      Here are some custom instructions: "${customInstruction}"`;}
    // } else {
    //   prompt = `You are a senior content writer and an expert. 
    //   Your task is to rewrite or rephrase the given content: "${text}".
    //   Here are some custom instructions: "${customInstruction}"`;
    // }

    const result = await model.generateContent(prompt);
    const response = result.response;

    const generatedText = response.text();

    console.log("AI Response Text:", generatedText);

    return generatedText;
  } catch (error) {
    console.error("Error generating AI content:", error);

    throw new Error("Failed to generate AI content.");
  }
}
