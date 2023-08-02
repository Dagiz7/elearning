import React from "react";
import LandingHero from "../components/LandingHero";
import OurGoal from "../components/OurGoal";
import CoursesList from "../components/CoursesList";
import Mentor from "../components/Mentor";
import Explore from "../components/Explore";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <LandingHero />
        <button onClick={() => {
            navigate("/books");
        }}>books</button>
      <OurGoal />
      <CoursesList />
      <Mentor />
      <Explore />
    </>
  );
}

export default LandingPage;
