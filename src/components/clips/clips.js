import React from "react";
import "./clips.scss";

const Clips = () => {

  const slideLeft = () => {
    let element = document.querySelector('.clips-container');
    document.querySelector('.inner').style.left = '-43.5vw';
    document.querySelector('.inner-two').style.left = '-43.5vw';
    document.querySelector('.see-more').style.display = 'none';
    document.querySelector('.previous').style.display = 'inline-block';
    console.log('moved')
  }

  const slideRight = () => {
    let element = document.querySelector('.clips-container');
    document.querySelector('.inner').style.left = '0';
    document.querySelector('.inner-two').style.left = '0';
    document.querySelector('.see-more').style.display = 'inline-block';
    document.querySelector('.previous').style.display = 'none';
    console.log('moved')
  }
  return (
    <div className="clips-container">
      <div className="previous"><i class="fa-solid fa-circle-chevron-left" onClick={slideRight}></i></div>
      <div className="inner">
        <div className="main-clip"></div>
        <div className="column-one">
          <div className="clip"></div>
          <div className="clip"></div>
        </div>
        <div className="column-two">
          <div className="clip"></div>
          <div className="clip"></div>
        </div>
        
      </div>
      <div className="inner-two">
          <div className="column-two">
            <div className="clip"></div>
            <div className="clip"></div>
          </div>
          <div className="column-two">
            <div className="clip"></div>
            <div className="clip"></div>
          </div>
          <div className="column-two">
            <div className="clip"></div>
            <div className="clip"></div>
          </div>
        </div>
        <div className="see-more"><i class="fa-solid fa-circle-chevron-right" onClick={slideLeft}></i></div>
    </div>
  );
};

export default Clips;
