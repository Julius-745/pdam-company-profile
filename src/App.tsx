import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HelmetProvider} from "react-helmet-async"
import Home from "./Home";
import NewsDetail from "./routes/news/NewsDetail";

function App() {

  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/news/:id" element={<NewsDetail/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
