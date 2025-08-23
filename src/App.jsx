import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
        <Route path="/neet/online-coaching-class12" element={<Class12Program />} />
      </Routes>
    </BrowserRouter>
  </div>
}

function Landing() {
  return <div>
    Welcome to Allen
  </div>
}

function Class11Program() {
  return <div>
    Class 11 content
  </div>

  function Class12Program() {
    return <div>
      Class 12 content
    </div>
  }
}
export default App
