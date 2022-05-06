import React from 'react'
import { ShowAll } from '../ShowAll/ShowAll'
import './BlackBlockThree.css'

export const BlackBlockThree = ({
    titleOne,
    titleTwo,
    titleThree,
    subTitle,
    colorTitleOne,
    colorTitleTwo,
    products,
    logo,

}) => {

  return (
    <div className='title'>
        <div className="title_inside">
        <div className="tittleOne">
            <h1 style ={{color:colorTitleOne}}>
                {titleOne}
            </h1>
        </div>
        <div className="tittleTwo">
            <h2 style ={{color:colorTitleTwo}}>
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
        <div className='products'>
        {products.map(item => {
            return(
        <div className="grid-blocks">
            <div className="grid">
                <div>
                    <img src={item.img} alt="" />
                </div>
                <div>
                    <h2>
                        {item.name}
                    </h2>
                </div>
                <div>
                    <h3>
                        {item.desc}
                    </h3>
                </div>
                <div>
                    <h4>
                        $ {item.price}
                    </h4>
                </div>
            </div>
        </div>

            )
        })}
        </div>
        <div className="view">
            <p>
                View All
                
                <svg width="61" height="9" viewBox="0 0 61 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z" fill="#FB0223"/>
                </svg>

            </p>
            <img src={logo} alt="" />
        </div>
        
        </div>
    </div>
  )
}
