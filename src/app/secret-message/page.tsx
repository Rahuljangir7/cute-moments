"use client";

import { useState } from "react";

const SecretMessage = () => {
  const [input, setInput] = useState("");
  const [isEncoding, setIsEncoding] = useState(true);

  const encode = (str: string) => {
    return str.split('').map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        return String.fromCharCode(((code - (code >= 97 ? 97 : 65) + 13) % 26) + (code >= 97 ? 97 : 65));
      }
      return char;
    }).join('');
  };

  const result = input ? encode(input) : "Type something above...";

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-secret-container">
        <h1 className="cm-timeline-title">Secret Code 🔐</h1>
        <p className="cm-timeline-subtitle">Send messages that only we can understand!</p>
        
        <div className="cm-secret-box">
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', justifyContent: 'center' }}>
            <button 
              className={`cm-btn ${isEncoding ? 'cm-feature-main' : ''}`}
              style={{ padding: '8px 15px', fontSize: '0.9rem' }}
              onClick={() => setIsEncoding(true)}
            >
              Encode
            </button>
            <button 
              className={`cm-btn ${!isEncoding ? 'cm-feature-main' : ''}`}
              style={{ padding: '8px 15px', fontSize: '0.9rem' }}
              onClick={() => setIsEncoding(false)}
            >
              Decode
            </button>
          </div>

          <textarea
            className="cm-secret-input"
            rows={4}
            placeholder={isEncoding ? "Write your secret message..." : "Paste the coded message..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <p style={{ textAlign: 'left', fontSize: '0.9rem', color: '#888', marginBottom: '10px' }}>
            {isEncoding ? "Encoded Message:" : "Decoded Message:"}
          </p>
          <div className="cm-secret-result">
            {result}
          </div>

          <button 
            className="cm-btn" 
            style={{ marginTop: '20px', width: '100%', background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}
            onClick={() => {
              navigator.clipboard.writeText(result);
              alert("Copied to clipboard!");
            }}
          >
            📋 Copy Result
          </button>
        </div>

        <div className="cm-music-note">
          <p>💡 This uses a simple ROT13 cipher. Share the coded text with me!</p>
        </div>
      </div>
    </>
  );
};

export default SecretMessage;
