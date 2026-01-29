import "./App.css";
import Login from "../src/components/login/login";
import NotFoundPage from "../src/components/notFoundPage/NotFoundPage";
import HomePage from "../src/components/homePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/Homepage" element={<HomePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
