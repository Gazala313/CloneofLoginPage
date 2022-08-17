import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import LastPage from "./Component/LastPage";
import Main1 from "./Component/Main1";
import SecondPage from "./Component/SecondPage";
import ThirdPages from "./Component/ThirdPages";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />

          <Routes>
            <Route path="/" element={<Main1 />} />
            <Route path="/SecondPage" element={<SecondPage />} />
            <Route path="/thirdPage" element={<ThirdPages />} />
            <Route path="/lastPage" element={<LastPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
