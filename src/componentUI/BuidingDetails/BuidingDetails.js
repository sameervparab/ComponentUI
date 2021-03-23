import React from 'react'
import './BuidingDetails.css'
import BuildingInfo from './BuildingInfo'

const BuidingDetails = () => {
    return (
        <div className="BldgDetails">
             <h2>Building Details</h2>

             <div className="bldgInfo">
                
                
                <div className="rows">
                     <BuildingInfo/>
                     <BuildingInfo/>
                </div>
                <div className="rows">
                     <BuildingInfo/>
                     <BuildingInfo/>
                </div>


             </div>
            
        </div>
    )
}

export default BuidingDetails
