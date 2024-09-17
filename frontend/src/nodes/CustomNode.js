import { useState } from "react";
import BaseNode from "./BaseNode";

export const CustomNode = ({ id }) => {
  const [name, setName] = useState("Custom Node");

  const handleNameChange = (e) => setName(e.target.value);

  return (
    <BaseNode
      id={id}
      title="Custom Node"
      handles={[
        { type: "source", position: Position.Right, id: `${id}-output` },
      ]}
    >
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
    </BaseNode>
  );
};
