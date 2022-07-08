import React from 'react'
import './articles.scss'

const Articles = () => {
  return (
    <div className="article-container">
        <div className="inner">
            <div className="others">
                <ul className="other-articles">
                    <li className="article">
                        <h4 className="article-title">Title of the Article</h4>
                        <h5>By Breez</h5>
                    </li>
                    <li className="article">
                        <h4 className="article-title">Title of the Article</h4>
                        <h5>By Breez</h5>    
                    </li>
                    <li className="article">
                        <h4 className="article-title">Title of the Article</h4>
                        <h5>By Breez</h5>
                    </li>
                </ul>
            </div>
            <div className="main">
                <div className="text-container">
                  <h2>Article Name Goes Here. !!!!!</h2>
                  <h3>By: MMA Breez</h3>
                  <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium aliquid nesciunt quasi assumenda iusto provident eaque, officia sequi? Distinctio fuga aliquam iste quos aspernatur.</p>  
                </div>
                
                <div className="picture">
                <div className="continue-button">Continue Reading</div>
                </div>
                <div className="right-side"></div>    
            </div>   
        </div>
        
    </div>
  )
}

export default Articles