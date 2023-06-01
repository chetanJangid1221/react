import React from "react";
import Header from "./Header";
import Typewriter from 'typewriter-effect';

function CoverPage(){
    return<div className="top-container"> 
      
      
        <Header />
        <div className="Name-Title" > 
          <h1 >I'm Chetan Jangid </h1>
          {/* <p >a developer</p> */}
          <div className="App">
            <Typewriter

              onInit={(typewriter) => {

                typewriter

                  .typeString("Programmer")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Coder")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Engineer!!")

                  .pauseFor(1000)
                  // .deleteAll()
                  // .typeString("")
                  .start();

              }}
            />
          </div>
        
        </div>
          <img className="Mountain-img" src={process.env.PUBLIC_URL +"/images/mountain.png"} alt= "mountains" />
          <img className="cloud1-img" src={process.env.PUBLIC_URL +"/images/cloud1.png"} alt= "cloud1" />
          <img className="cloud2-img" src={process.env.PUBLIC_URL +"/images/cloud2.png"} alt= "cloud2" />
          <img className="bird" src={process.env.PUBLIC_URL +"/images/bird.gif"} alt= "bird" />
          
          {/* <img className="bird2" src="images/bird.gif" alt= "bird" /> */}

          
          
      </div>
      
      
    
}
export default CoverPage;