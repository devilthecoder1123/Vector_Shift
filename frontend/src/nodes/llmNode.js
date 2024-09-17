import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const LLMNode = ({ id, data }) => {
  const content = (
    <div>
      <span>This is an LLM.</span>
    </div>
  );

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: "system",
      style: { top: "33%" },
    },
    {
      type: "target",
      position: Position.Left,
      id: "prompt",
      style: { top: "66%" },
    },
    { type: "source", position: Position.Right, id: "response" },
  ];

  return <BaseNode id={id} label="LLM" content={content} handles={handles} />;
};
