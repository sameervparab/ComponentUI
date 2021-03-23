import React from 'react'
import './Icons.css'
import SelectBuilding from './SelectBuilding/SelectBuilding'
import SplitterInfo from './SplitterInfo/SplitterInfo'
import ClearSelection from './ClearSelection/ClearSelection'


const Icons = () => {
    return (
        <div className="iconsTools">
            <SelectBuilding/>
            <SplitterInfo/>
            <ClearSelection/>
            
        </div>
    )
}

export default Icons
