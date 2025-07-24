import React from "react";
import './nav.css'
import Header from "../header/header";
import Hero from "../hero/Hero";

const Nav = () => {
  return (

    <div className="container">

      <div className="min-h-screen bg-gradient-to-b from-[#f5f8ff] to-[#f9fff6] font-sans">
        {/* Top Bar */}
        <div className="top_bar bg-lime-300 text-black text-center py-2 text-sm font-medium">
          <span className="inline-flex items-center justify-center">
            <span className="mr-2">➡</span> Start Free Trial Now
          </span>
        </div>

        {/* NavBar */}
        
        <div>
          <Header/>
        </div>


        {/* Hero Section */}
        <section className=" text-center px-4 md:px-20 py-16">
          <br />
          <br />
          <h2 className="text">
            Simplify Business: All-in-One,<br />
            <span className="text">Efficient, and Affordable</span>
          </h2>
          <br />
          <p className="text_s">
            Smart start: AI, efficient, Budget-Friendly.
          </p>
          <br />
          <div className="flex justify-center gap-5 flex-wrap">
            <button className="btn_t  hover:bg-blue-700">
              Start 30 days Free Trial →
            </button>
            <button className="btn_video flex items-center ">
              <span className="text-green-600 text-lg">▶</span>
            </button> WATCH VIDEO

          </div>
          <br />
          <br />
          <br />
          <div className="img-corner">
            <img src="	https://lockene.us/wp-content/uploads/2023/11/shape.png" alt="" />
          </div>
          <div className="image-hero">
            <img src="https://lockene.us/wp-content/uploads/2025/06/hero-620.png" alt=""  />
          </div>
          <br />
          <br />
        </section>
      </div>
    </div>
 
  
  );
};
export default Nav;
