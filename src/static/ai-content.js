"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function AiContent({
  text,
  contentGen = false,
  customInstruction = "",
}) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    let prompt;
    if (contentGen == true) {
      prompt = `**Role:** You are an expert-level SEO Content Strategist and a senior blog writer for a leading tech publication.

                **Task:** Write a comprehensive, engaging, and well-structured blog post on the topic of: "${text}".

                **Context & Audience:** The target audience is intermediate developers and tech enthusiasts. The tone should be informative, authoritative, yet accessible and easy to understand.

                **Format Requirements:**
                - Start with a captivating introductory paragraph that hooks the reader.
                - Structure the main content using clear headings (H2s) and subheadings (H3s).
                - Incorporate bullet points or numbered lists to break up text and improve readability.
                - Include a concluding paragraph that summarizes the key takeaways.
                - The entire output must be in valid HTML format.

                **Custom Instructions:** ${customInstruction}`;
    } else {
      prompt = `**Role:** You are a professional editor and copywriter with expertise in enhancing digital content for clarity and engagement.

                **Task:** Rewrite and rephrase the following content to make it more clear, concise, and engaging. Improve the flow and sentence structure, but retain the original meaning and key information.

                **Original Content:** "${text}"

                **Tone & Style:** The rewritten content should have a professional yet conversational tone. It should be active, direct, and easy for a general audience to read.

                **Format Requirements:**
                - The output should be the rewritten text only  .
                - The entire output must be in valid HTML format.

                **Custom Instructions:** ${customInstruction}"`;
      }

    

    const result = await model.generateContentStream(prompt);

    let generatedText = "";

    // Read chunks as they arrive
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      if (chunkText) {
        generatedText += chunkText;
      }
    }

    console.log("AI Response Text:", generatedText);
    return generatedText;
  } catch (error) {
    console.error("Error generating AI content:", error);

    throw new Error("Failed to generate AI content.");
  }
}
