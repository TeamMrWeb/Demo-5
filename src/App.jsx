import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <main className="app">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/nosotros" element={<About />}/>
                <Route exact path="/contacto" element={<Contact />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </main>
    )
}
