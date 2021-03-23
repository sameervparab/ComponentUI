import React from 'react'
import './Select.css'


const Select = () => {
    return (
        <div class="form-group jn-icon jn-icon-mtd jn-select"> 
        <i class="fa fa-caret-down" aria-hidden="true"></i>
        <select class="form-control">
            <option>Select</option>
            <option>Driving</option>
            <option>Internet</option>
            <option>Movie</option>
            <option>Music</option>
            <option>Reading</option>
            <option>Sports</option>                
        </select>
		<label class="form-label">Domain</label>
	</div>	
    )
}

export default Select
