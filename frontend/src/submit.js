// submit.js

export const SubmitButton = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <button
        type="submit"
        style={{
          backgroundColor: "#4A5568",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          fontSize: "14px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#2D3748")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4A5568")}
      >
        Submit
      </button>
    </div>
  );
};
