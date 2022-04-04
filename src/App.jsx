import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound";
export default function App() {
    return (
        <div className="app">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}
