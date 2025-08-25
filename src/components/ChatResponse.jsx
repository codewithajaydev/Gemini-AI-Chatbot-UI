import React from "react";

const ChatResponse = ({ response }) => {
  if (!response) return null;

  const { candidates, usageMetadata } = response;

  // Take only the first candidate
  const candidate = candidates?.[0];

  if (!candidate) return null;

  return (
    <div className="container my-5">
      <h3 className="mb-4 text-primary">AI Response</h3>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <p className="card-text fs-5">{candidate.content.parts[0].text}</p>

          {candidate?.citationMetadata?.citationSources?.length > 0 && (
            <>
              <h6 className="mt-3 text-secondary">Citations</h6>
              <ul className="list-group list-group-flush">
                {candidate.citationMetadata.citationSources.map((source, idx) => (
                  <li className="list-group-item" key={idx}>
                    <a href={source.uri} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      {source.uri}
                    </a>{" "}
                    <span className="badge bg-info text-dark">
                      Indexes: {source.startIndex} - {source.endIndex}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      {usageMetadata && (
        <div className="mt-4 p-3 border rounded bg-light">
          <h5 className="text-secondary">Usage Metadata</h5>
          <p>
            <span className="badge bg-primary me-2">Prompt Tokens: {usageMetadata.promptTokenCount}</span>
            <span className="badge bg-warning text-dark me-2">Response Tokens: {usageMetadata.candidatesTokenCount}</span>
            <span className="badge bg-success">Total Tokens: {usageMetadata.totalTokenCount}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatResponse;
