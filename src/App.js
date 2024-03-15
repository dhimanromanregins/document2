import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./custum.css";
import "./sweet-alert.css";
import Harsh from './components/Harsh';
import Perl from './components/Perl';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Perl />}/>
        <Route path="/harsh" element={<Harsh />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
