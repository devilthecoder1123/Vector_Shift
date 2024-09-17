import { Handle } from "reactflow";

const BaseNode = ({ id, label, content, handles }) => {
  return (
    <div
      style={{
        width: 220,

        borderRadius: "16px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.8)",
        background: "linear-gradient(135deg, #3A0D70, #5B0D94)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
        fontSize: "14px",
        fontFamily: "'Inter', sans-serif",
        color: "#E5E5E5",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
      }}
    >
      <div
        style={{
          backgroundColor: "#430B8A",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          padding: "8px",
          color: "#FFFFFF",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "16px",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#FFFFFF";
          e.currentTarget.style.color = "#430B8A";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#430B8A";
          e.currentTarget.style.color = "#FFFFFF";
        }}
      >
        {label}
      </div>

      <div
        style={{
          backgroundColor: "#2F116C",
          borderBottomLeftRadius: "16px",
          borderBottomRightRadius: "16px",
          padding: "12px",
          color: "#E5E5E5",
          textAlign: "left",
        }}
      >
        {content}
      </div>

      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={{
            backgroundColor: "#D3B7F3",
            borderRadius: "50%",
            border: "2px solid #E5E5E5",
            width: "6px",
            height: "6px",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#B882F2")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#D3B7F3")}
        />
      ))}
    </div>
  );
};

export default BaseNode;
