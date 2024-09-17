import { useState, useEffect } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);

  // Function to handle text changes and dynamic resizing
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);
    handleVariableDetection(newText);
  };

  // Detects variables like {{input}} and creates handles for them
  const handleVariableDetection = (text) => {
    const variableRegex = /{{(.*?)}}/g;
    const matches = Array.from(text.matchAll(variableRegex), (m) => m[1]);
    setVariables(matches);
  };

  const content = (
    <label>
      Text:
      <textarea
        style={{
          width: `${Math.min(400, currText.length * 8)}px`,
          height: `${Math.min(200, currText.split("\n").length * 5)}px`,
          resize: "none",
          border: "1px solid black",
          padding: "10px",
        }}
        value={currText}
        onChange={handleTextChange}
      />
    </label>
  );

  // Handles generated from variables detected in the text
  const handles = [
    ...variables.map((variable, index) => ({
      id: `${id}-${variable}`,
      type: "target",
      position: Position.Left,
    })),
    {
      id: `${id}-output`,
      type: "source",
      position: Position.Right,
    },
  ];

  return (
    <BaseNode id={id} label="Text Node" content={content} handles={handles} />
  );
};
