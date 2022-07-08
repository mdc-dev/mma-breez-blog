import React from 'react'
import './podcast.scss'

const Podcast = () => {
  return (
    <div className="podcast-container">
        <div className="left-side">
            <h2>Video Title</h2>
            <div className="video-spot"></div>
            <div className="info">
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, amet fugiat vel nulla iusto veritatis voluptas expedita maxime! Sapiente, obcaecati.</p>
                <button className="subscribe">Subscribe</button>   
            </div>
               
        </div>
        <div className="right-side">
            <div className="upcoming">
                <h2>Upcoming</h2>
                <ul className="videos">
                    <li className="vid"></li>
                    <li className="vid"></li>
                    <li className="vid"></li>
                    <li className="vid"></li>
                    <li className="vid"></li>
                    <li className="vid"></li>
                    <li className="vid"></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Podcast