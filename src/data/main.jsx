import React from "react";
import ReactDOM from "react-dom/client";
import { StudentProvider, StudentForm, StudentTable } from "./Data";

function App() {
  return (
    <StudentProvider>
      <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Manajemen Data Siswa</h1>
        <StudentForm />
        <StudentTable />
      </div>
    </StudentProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
