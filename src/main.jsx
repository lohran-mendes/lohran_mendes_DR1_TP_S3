import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Question_01 from "./question-01/question-01.jsx";
import Question_02 from "./question-02/question-02.jsx";
import Question_03 from "./question-03/question-03.jsx";
import Question_04 from "./question-04/question-04.jsx";
import Question_05 from "./question-05/question-05.jsx";
import Question_06 from "./question-06/question-06.jsx";
import Question_07 from "./question-07/question-07.jsx";
import Question_08_09 from "./question-08-09/question-08-09.jsx";
import Question_10_11 from "./question-10-11/question-10-11.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/question_01" element={<Question_01 />} />
      <Route path="/question_02" element={<Question_02 />} />
      <Route path="/question_03" element={<Question_03 />} />
      <Route path="/question_04" element={<Question_04 />} />
      <Route path="/question_05" element={<Question_05 />} />
      <Route path="/question_06" element={<Question_06 />} />
      <Route path="/question_07" element={<Question_07 />} />
      <Route path="/question_08_09" element={<Question_08_09 />} />
      <Route path="/question_10_11" element={<Question_10_11 />} />
    </Routes>
  </BrowserRouter>
);
