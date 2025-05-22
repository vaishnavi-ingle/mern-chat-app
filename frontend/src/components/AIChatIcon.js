import React, { useState } from "react";
import AIChatModal from "./AIChatModal";
import { FaRobot } from "react-icons/fa";
import "./AIChat.css";

const AIChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="ai-chat-icon" onClick={() => setIsOpen(true)}>
        <FaRobot size={24} />
      </div>
      {isOpen && <AIChatModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default AIChatIcon;
