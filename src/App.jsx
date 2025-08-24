import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"

function App() {
  return <div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      Footer | Contact Us
    </BrowserRouter>
  </div >
}

function Layout() {
  return <div style={{ height: "100vh" }}>
    <Link to="/">Allen</Link>
    |
    <Link to="/neet/online-coaching-class-11">Class 11</Link>
    |
    <Link to="/neet/online-coaching-class-12">Class 12</Link>
    <Outlet />
    <div>
      Footer
    </div>
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

}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/")
  }
  return <div>
    Class 12 content
    <button onClick={redirectUser}>Landing Page</button>
  </div>
}

function ErrorPage() {
  return <div>
    sorry page not found
  </div>
}
export default App
