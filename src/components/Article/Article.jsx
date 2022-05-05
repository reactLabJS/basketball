import React from 'react'
import circle from '../../Icons/Group 1.png'
import picture from '../../Icons/Pict.png'
import './Article.css'

export const Article = () => {
  return (
    <div className='article'>
        <div className="article-inside">
            <p>
                JERSEY
            </p>
            <img src={circle} alt="" />
            <p>
                NBA
            </p>

        </div>
        <div className="small-tittle">
            <div className="empty">

            </div>
            <div className="tittle">
                <div className="tittle-inside">
                    <div className="title-inside_block">
                        <p> 
                            whichever  <span className='nba'>nba</span> <span className='team'>team</span> your support, get your jersey here today.
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <div className="picture">
            <div className="picture-inside">
            <img src={picture} alt="" />
            </div>
        </div>
    </div>
  )
}
