import Header from "./components/Header";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BooksPage from "./pages/BooksPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import Background from "./components/Background";
import CoursesPage from "./pages/CoursesPage";
import DetailsHero from "./components/DetailsHero";
import CourseDetails from "./components/CourseDetails";

export default function App() {
  return (
    <div>
      <Background />
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/coursedetails" element={<CourseDetailsPage />} />
      </Routes>
              
      
  
      <Subscription />
      <Footer />
    </div>
  );
}
