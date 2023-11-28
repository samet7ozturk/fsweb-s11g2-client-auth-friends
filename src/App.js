import { useEffect } from "react";
import "./App.css";
import PageContent from "./layout/PageContent";
import { AxiosInstance, renewAxiosInstance } from "./api/api";

function App() {
  return (
    <div className="App">
      <PageContent />
    </div>
  );
}

export default App;
