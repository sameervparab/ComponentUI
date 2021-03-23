import React from 'react'
import BuildingInfo from './componentUI/BuidingDetails/BuildingInfo'
import ButtonActive from './componentUI/Button/ButtonActive/ButtonActive'
import Title from './componentUI/Title/Title'
import Select from './componentUI/Select/Select'
import './K2Screen.css'

const K2Screen = () => {
    return (
        <div className="kScreenContainer">
           <Title/>
           <div className="topContent">
               <div class="row">
                    <BuildingInfo/>
                    <BuildingInfo/>
                    <Select/>
                    <BuildingInfo/>
                    <BuildingInfo/>
               </div>
               <div class="row">
                    <BuildingInfo/>
                    <BuildingInfo/>
                    <ButtonActive/>
                </div>

           </div>
        </div>   
    
    )
}

export default K2Screen
