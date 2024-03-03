import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import WorkWithMeLayout from "./layout/WorkWithMeLayout";
import AboutLayout from "./layout/AboutLayout";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <ScrollToTop />
          <ScrollProgress />
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/home" element={<HomeLayout />} />
            <Route path="/about" element={<AboutLayout />} />
            {/* <Route path="/blog" element={<AboutLayout />} /> */}
            <Route path="/work-with-me" element={<WorkWithMeLayout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
