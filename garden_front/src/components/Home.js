import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import FieldCard from "./FieldCard";

const styles = {
    con: {
        backgroundColor:" #faf7e1"
    },
    upSection:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems: "center"
    },
    title: {
        fontSize:"24px",
        padding: "15px"
    },
    addBtn: {
        fontSize:"18px",
        color:"#faf0e6",
        backgroundColor:"#21421d",
        padding: "5px"
    },
    cardBox: {
        display: "flex",
        flexWrap: "wrap",
        margin: "15px",
        justifyContent:"center",
        alignItems:"center"
    },
    card: {

    },
    
};

const Home = (props) => {

    const addSec = () => {
        alert("section added");
    }

    return(
        <div style={styles.con}>
            <Navbar/>

            <div className="container" >
                <div style={styles.upSection}>
                    <div style={styles.title}>Hi username! See your plants:</div>
                    <Link to="/add-section"> <button style={styles.addBtn} >Add new section</button></Link>
                </div>
                
                <div style={styles.cardBox}>
                    <FieldCard />
                    <FieldCard />
                </div>
            </div>
            
        </div>
    )
}

export default Home;