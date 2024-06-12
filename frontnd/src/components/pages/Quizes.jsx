import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import navigate from react-router-dom
import Card from "../Card";
import tech from "../assert/ai-technology.png";
import science from "../assert/science.jpg";
import sport from "../assert/sport.jpeg";
import Header from "../Header";
import Footer from "../Footer";

export default function Quizes() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state ? location.state.username : "";
  const isAdmin = location.state?.isAdmin || false; // Access the admin status from the state

  // console.log("Is Admin:", isAdmin); // Check if the admin status is correctly passed

  const navigateToRoute = (route) => {
    navigate(route, { state: { isAdmin } }); // Pass the isAdmin status in the state
  }

  return (
    <div>
      <Header />
      <div className="flex justify-center text-center">
        <h3 className="text-3xl font-bold mt-6">Welcome {username}</h3>
      </div>
      <div className="flex justify-center mb-8">
        <Card
          title="TECHNOLOGY"
          image={tech}
          description="Let's play with the Technology quiz"
          onClick={() => navigateToRoute("/technology")}
        />
        <Card
          title="SCIENCE"
          image={science}
          description="Let's play with the Science quiz"
          onClick={() => navigateToRoute("/science")}
        />
        <Card
          title="SPORTS"
          image={sport}
          description="Let's play with the Sports quiz"
          onClick={() => navigateToRoute("/sports")}
        />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}
