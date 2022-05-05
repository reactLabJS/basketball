import React from 'react'
import './Tittle.css'
export const Tittle = ({
    titleOne,
    titleTwo,
    titleThree,
    subTitle
}) => {
  return (
    <div className='title'>
        <div className="title_inside">
        <div className="tittleOne">
            <h1>
                {titleOne}
            </h1>
        </div>
        <div className="tittleTwo">
            <h2>
                {titleTwo}
            </h2>
        </div>
        <div className="tittleThree">
            <h2>
                {titleThree}
            </h2>
        </div>
        <div className="tittleFour">
            <h2>
                {subTitle}
            </h2>
        </div>
        <div className="grid-blocks">
            <div className="grid">sdd</div>
            <div className="grid">2</div>
            <div className="grid">33</div>
        </div>
        
        </div>
    </div>
  )
}
