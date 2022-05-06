import React from 'react'
import { Article } from './Article/Article'
import { Tittle } from './Main/Tittle'
import { bigPicture, KobyProducts, lakerProducts, MichaelProducts } from '../Objects/products'
import logoTeam from '../Icons/Group 2.png'
import { WhiteBlock } from './white-two/WhiteBlock'
import { players } from '../Objects/players'
import ChangeColor from './Main/ChangeColor'
import { BlackBlock2 } from './Block3/BlackBlock2'
import { BlockFour } from './Block4/BlockFour'
import { BlackBlockThree } from './BlockFive/BlackBlockThree'
import { Last } from './Last/Last'
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
         <BlockFour
         one="Hall of fame"
         two="BAsketball"
         twoColor="#FB0223"
         three="Hall of fame"
         four="The naismith memorial basketball hall of fame is home to more than Four nundred iductees and more than 40 000 square feet of basketball history."
         five= {
          <ChangeColor 
          firstText="Michael"
          firstColor="#fc0323"
          secondText="Jordan"
          secondColor="#000000"
          />
         }
         six={
          <ChangeColor 
          firstText="David"
          firstColor="#c5c5c5"
          secondText="Robinson"
          secondColor="#000000"
          />

         }
         seven={
          <ChangeColor 
          firstText="John"
          firstColor="#0a4e10"
          secondText="stockton"
          secondColor="#000000"
          />
         }
         />
         <BlackBlockThree
        titleOne="Jerseys 1992 team usa"
        colorTitleOne="white"
        titleTwo={
          <ChangeColor 
          firstText="1992"
          firstColor="#0a49ef"
          secondText="team usa"
          secondColor="#fc0323"
          />
        } 
        colorTitleTwo="#FB0223"
        titleThree="Authentic edition"
        subTitle="Jerseys of the united sates man’s olympics basketball team, which represented the us of a in the 1992 summer olympics in barcelona."
        products={MichaelProducts}
         />
         <Last 
         titleOne="Jerseys 1992 team usa"
         colorTitleOne="black"
         titleTwo= "the nike"
         colorTitleTwo="#77d131"
         titleThree="app"
         subTitle="Here you can find many interesting and useful from nike. Download the application from nike."
         products={bigPicture}
         />
        
    </div>
  )
}
