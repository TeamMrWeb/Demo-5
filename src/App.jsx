import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound";
import About from "./pages/About";

export default function App() {
    return (
        <main className="app">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/nosotros" element={<About />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </main>
    )
}
