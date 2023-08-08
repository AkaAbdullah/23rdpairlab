import FixedNav from "./components/FixedNav"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import Services from "./pages/ServicesPage"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>
        <FixedNav/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/services" element= {<Services/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
