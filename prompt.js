const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("API_KEY");

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "넌 뭐니";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();
