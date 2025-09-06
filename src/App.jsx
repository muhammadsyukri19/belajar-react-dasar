import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./(pages)/SignIn";
import Landing from "./(pages)/Landing"; // <-- perbaiki path

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
