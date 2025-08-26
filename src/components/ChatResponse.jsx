import React from "react";

const ChatResponse = ({ response }) => {
  if (!response?.candidates?.length) return null;

  // Get the first candidate's text
  const text = response.candidates[0].content.parts[0].text;

  // Split the text into lines (using period + space)
  const lines = text.split(". ").filter(line => line.trim() !== "");

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "20px auto",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      border: "1px solid #ccc",
      padding: "15px",
      borderRadius: "6px",
      backgroundColor: "#f9f9f9",
    },
    list: {
      paddingLeft: "20px",
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <ul style={styles.list}>
          {lines.map((line, idx) => (
            <li key={idx}>{line.trim()}.</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatResponse;
