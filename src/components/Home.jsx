import React from 'react'
import { Article } from './Article/Article'
import { Tittle } from './Main/Tittle'
import { KobyProducts, lakerProducts } from '../Objects/products'
import logoTeam from '../Icons/Group 2.png'
import { WhiteBlock } from './white-two/WhiteBlock'
import { players } from '../Objects/players'
import ChangeColor from './Main/ChangeColor'
import { BlackBlock2 } from './Block3/BlackBlock2'


export const Home = () => {
  return (
    <div>
        <Article/>
        
        <Tittle 
            titleOne="Jerseys bestsellers"
            colorTitleOne="white"
            titleTwo="bestsellers" 
            colorTitleTwo="#FB0223"
            titleThree="Collection"
            subTitle="The jerseys of the best nba players of the regular seasons."
            products={lakerProducts}
            logo={logoTeam}
        />
        <WhiteBlock
        titleOne="Every team"
        titleTwo="one"
        colorTitleTwo="#0949EF"
        secondWordTitleTwo="Store"
        titleThree="Every"
        titleThreeColor="#FB0223"
        secondWordTitleThree="Team"
        subTitle="SElect your favorite team to view it’s jersys."
        avatars={players}
        />
        <BlackBlock2
        titleOne="Jerseys kobe bryant"
        colorTitleOne="white"
        titleTwo={
          <ChangeColor 
          firstText="KOBE"
          firstColor="#FCBF05"
          secondText="BRYANT"
          secondColor="#6021db"
          />
        } 
        colorTitleTwo="#FB0223"
        titleThree="Collection"
        subTitle="Kobe bryant: a basketball legend. bryant crafted a storied career In his 20 seasons with the lakers. the lagacy of kobe bryant was a far-reaching one."
        products={KobyProducts}
         />
        
    </div>
  )
}
