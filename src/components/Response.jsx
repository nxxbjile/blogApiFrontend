import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Response = ({ response }) => {
  return (
    <div className={`flex flex-col`}>
      <div className={`text-md my-3`}>Response :</div>
      <div>
        <SyntaxHighlighter
          language="json"
          style={atomOneDark}
          className={`rounded-lg`}
        >
          {response}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Response;
