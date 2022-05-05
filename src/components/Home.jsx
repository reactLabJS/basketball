import React from 'react'
import { Article } from './Article/Article'
import { Tittle } from './Main/Tittle'
import { lakerProducts } from '../Objects/products'
import logoTeam from '../Icons/Group 2.png'

export const Home = () => {
  return (
    <div>
        <Article/>
        
        <Tittle 
            titleOne="Jerseys bestsellers"
            colorTitleOne="white"
            titleTwo="bestsellers" 
            colorTitleTwo="#FB0223;
            "
            titleThree="Collection"
            subTitle="The jerseys of the best nba players of the regular seasons."
            products={lakerProducts}
            logo={logoTeam}
        />
    
    </div>
  )
}
