import './Header.css'

import { useState } from 'react'
import searching from '../../Icons/Vector (1).png'
import like from '../../Icons/Vector (2).png'
import cart from '../../Icons/Vector.png'
import nikelogo from '../../Icons/Logo.png'
import { Link } from 'react-router-dom'
import { lakerProducts } from '../../Objects/products'
export const Header = () => {
    const [filter, setFilter] = useState('');
    const searchText =  (event) =>{
        setFilter(event.target.value)
    }
     let dataSearch = lakerProducts.filter(item =>{
        return Object.keys(item).some(key =>
            item [key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
    
    return(
        <div className="header">
            <div className="header-block">
                <div className="nike-logo">
                    <Link to="/"><img src= {nikelogo} width={80} alt="" /></Link>
                </div>
                <div className="nav">
                    <div className="navmenu">
                    <li>
                        <a href="/">
                            MAN
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            WOMAN
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            JERSEY
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            TEAMS
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            APP
                        </a>
                    </li>
                    </div>
                </div>
                <div className="links">
                    <Link to="/about" className='aboutClass'>
                            About
                    </Link>
                    <Link to="/signup" className='signupClass'>
                        Sign Up   
                    </Link>
                </div>
               
                <div className="search-box">
                <input type="text" placeholder='Search Here...' className='search-input'
                value={filter }
                onChange={searchText.bind(this)}
                />
              
                
                <a href="/" className='search-btn'>
                    <img src={searching} alt="" />
                </a>
            </div>
                    <div className="icons-inside">
                        <img src={like} alt="" />
                        <img src={cart} alt="" />

                    </div>
                
            </div>
            
            <div className="second">
                <div className="second-inside">
                   <ul>
                       <li>
                           <a href="/">
                               JERSEY
                           </a>
                       </li>
                       <li>
                           <a href="/">
                           NIKE & NBA COLLABORATION
                           </a>
                       </li>
                   </ul>
                </div>
            </div>
        </div>
    )
}
