import React, { useState } from "react";
import axios from "axios";
import "./AIChat.css";

const AIChatModal = ({ onClose }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const { data } = await axios.post('/api/gemini/ask', { prompt: question });
      setAnswer(data.answer || "No answer received.");
    } catch (error) {
      setAnswer("Error fetching answer.");
    }
    setLoading(false);
  };

  return (
    <div className="ai-chat-modal-overlay">
      <div className="ai-chat-modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h3>Ask MCA AI Assistant</h3>

        {/* Content wrapper */}
        <div className="ai-chat-content">
          {/* Messages container */}
          <div className="ai-chat-messages">
            {answer && <div className="ai-answer"><strong>Answer:</strong> {answer}</div>}
          </div>

          {/* Textarea for question */}
          <textarea
            rows="3"
            placeholder="Ask your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={loading}
          />

          <button onClick={askQuestion} disabled={loading}>
            {loading ? "Thinking..." : "Ask"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatModal;
