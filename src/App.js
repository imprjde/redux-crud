import "./App.css";
import Form from "./components/Form";
import DisplayData from "./components/DisplayData";
import Header from "./components/Header";
import Update from "./components/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<DisplayData />} />
          <Route path="/create" element={<Form />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
