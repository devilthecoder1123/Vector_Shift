import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#531b87",
        minHeight: "100vh",
        padding: "0px",
      }}
    >
      <div className="min-h-screen bg-gray-50">
        <PipelineToolbar />
        <div className="container mx-auto p-6">
          <PipelineUI />
        </div>
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
