import { useState } from "react";
import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const content = (
    <>
      <label>
        Name:
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          style={{
            width: "100%",
            padding: "4px 0px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginTop: "4px",
          }}
        />
      </label>
      <label style={{ display: "block" }}>
        Type:
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          style={{
            width: "100%",
            padding: "4px 8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginTop: "4px",
          }}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </>
  );

  const handles = [{ type: "source", position: Position.Right, id: "value" }];

  return <BaseNode id={id} label="Input" content={content} handles={handles} />;
};
