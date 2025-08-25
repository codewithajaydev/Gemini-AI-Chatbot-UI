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

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit} className="p-4 bg-light border rounded shadow-sm">
        <h5 className="mb-3 text-primary">Ask a Question</h5>
        <div className="input-group">
          <input
            type="text"
            className="form-control form-control-lg rounded-start"
            placeholder="Ask me Anything..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary btn-lg rounded-end"
          >
            Ask AI
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default ChatInput;
