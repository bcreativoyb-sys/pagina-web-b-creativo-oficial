import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (prompt: string) => {
  // Use process.env.API_KEY directly as required by the SDK guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "Eres un experto asesor de marketing y diseño para Design Studio X. Tu objetivo es ayudar a los clientes a entender las tendencias actuales de diseño, sublimación, DTF y desarrollo web. Responde de forma profesional, breve y persuasiva.",
      },
    });

    // Access the .text property directly instead of calling a method.
    const text = response.text || "Lo siento, no pude procesar tu solicitud.";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    const links = chunks
      .filter((chunk: any) => chunk.web)
      .map((chunk: any) => ({
        title: chunk.web.title,
        uri: chunk.web.uri,
      }));

    return { text, links };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "Hubo un error al conectar con nuestro asistente inteligente.", links: [] };
  }
};