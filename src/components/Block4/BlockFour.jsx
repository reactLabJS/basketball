import React from 'react'
import './BlockFour.css'

import slider from '../../Icons/Slider.png'
export const BlockFour = ({
  one,
  oneColor,
  two,
  twoColor,
  three,
  threeColor,
  four,
  fourColor,
  years,
  five,
  fiveColor,
  six,
  sixColor,
  seven,
  sevenColor
}) => {
  return (
    <div className='blockFour'>
      <div className="blockFour-inside">
        <div className="one">
          <h2 style ={{color:oneColor}}>
            {one}
          </h2>
        </div>
        <div className="two">
          <h2 style ={{color:twoColor}}>
            {two}
          </h2>
        </div>
        <div className="three">
          <h2 style ={{color:threeColor}}>
            {three} 
          </h2>
        </div>
        <div className="four">
          <h2 style ={{color:fourColor}}>
            {four}
          </h2>
        </div>
        <div className="years">
          <h2 style ={{color:fiveColor}}>
            <span>
              2005
            </span>
            <span>
              2006
            </span>
            <span>
              2007
            </span>
            <span>
              2008
            </span>
            <span className='nine'>
              2009
            </span>
            <span>
              2010
            </span>
            <span>
              2011
            </span>
            <span>
              2012
            </span>
          </h2>
        </div>
      <div className="years-line">
        <img src={slider} alt="" />
      </div>
      <div className="five">
        <h2 style ={{color:fiveColor}}>
          {five}
        </h2>
      </div>
      <div className="six">
        <h2 style ={{color:sixColor}}>
          {six}
        </h2>
      </div>
      <div className="seven">
        <h2 style ={{color:sevenColor}}>
          {seven}
        </h2>
      </div>
      </div>

    </div>
  )
}
