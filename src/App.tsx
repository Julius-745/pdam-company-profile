import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NewsDetail from "./routes/news/NewsDetail";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news/:id" element={<NewsDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
