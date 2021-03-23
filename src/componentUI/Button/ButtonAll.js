import React from 'react'
import './ButtonAll.css'
import ButtonActive from './ButtonActive/ButtonActive'
import ButtonInActive from './ButtonInActive/ButtonInActive'
import Modal from '../Modal/Modal'

const ButtonAll = () => {
    return (
        <div className="allButton">
            <ButtonInActive/>
            <ButtonActive/>
            <ButtonActive/>
            <Modal/>

        
          
          

        </div>
    )
}

export default ButtonAll

