import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Class from "./pages/Class"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
    return (
        <main className="app">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/actividades" element={<Classes />} />
                <Route exact path="/actividad" element={<Class />} />
                <Route exact path="/nosotros" element={<About />}/>
                <Route exact path="/contacto" element={<Contact />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </main>
    )
}
