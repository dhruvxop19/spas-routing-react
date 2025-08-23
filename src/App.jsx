import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </div>
}

function Landing() {
  return <div>
    Welcome to Allen
  </div>
}

export default App
