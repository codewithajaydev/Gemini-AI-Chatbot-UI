import { useState } from "react";

const ChatInput = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);
      setQuestion("");
    }
  };

  const styles = {
    form: {
      display: "flex",
      gap: "8px",
      maxWidth: "600px",
      margin: "20px auto",
    },
    input: {
      flex: 1,
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "16px",
    },
    button: {
      padding: "10px 16px",
      backgroundColor: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Type your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Ask
      </button>
    </form>
  );
};

export default ChatInput;
