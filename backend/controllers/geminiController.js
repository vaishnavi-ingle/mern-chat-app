const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: "AIzaSyCsPjBB7aQfXzUMPcUPBFNEEpVpoSFIUe4" });

const getAnswer = async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    res.json({ answer: result.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Gemini API error: " + error.message });
  }
};

module.exports = { getAnswer };
