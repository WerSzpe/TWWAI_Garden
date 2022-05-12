import React, { useState } from 'react';

import Navbar from './Navbar';


const AddSection = () => {

    const [data, setData] = useState({
        sectionName: '',
        sectionId: '',

    })
    
    return ( 
        <div >
            <Navbar/>
            <div /*addBox */>
                <h1>Select your type of vegetable</h1>
                <select>
                    <option selected value="1">Carrot</option>
                    <option value="2">Cabagge</option>
                    <option value="3">Beetroot</option>
                    <option value="4">Beans</option>
                    <option value="5">Parsley</option>
                    <option value="6">Lettuce</option>
                    <option value="7">Zuccini</option>
                </select>
                <input type="submit" value="Submit"/>
            </div>

        </div>
    );
}

export default AddSection;