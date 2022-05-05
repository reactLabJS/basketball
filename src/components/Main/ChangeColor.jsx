
import React from 'react'

export default function ChangeColor ({
  firstText,
  firstColor,
  secondText,
  secondColor
}) {
  return (
    <div>
      {firstText && <span style={{color:firstColor}} className="first">{firstText}</span> }
      {" "}
      {secondText && <span style={{color:secondColor}} className="first">{secondText}</span> }
    </div>
  )
}
