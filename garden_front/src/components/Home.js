import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwt from 'jwt-decode';
import io from "socket.io-client";

import Navbar from './Navbar';
import FieldCard from "./FieldCard";
import FieldCardAdd from "./FieldCardAdd";

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
        fontSize:"28px",
        padding: "15px",
        fontWeight: "bold",
        color:"#023026"
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

    const [sections, setSections] = useState([]);

    useEffect(() => {
        const getSections = async () => {
            try {
                const res = await fetch("http://localhost:3001/api/sections/data", {
                    method: "GET",
                    headers: {"authorization": props.token}
                });
            } catch (error) {
                console.log(error);
            }
        }
        const socket = io("http://localhost:3001", {auth: {token:props.token}});
        socket.on("sectionsUpdate", data => {
            setSections(data.data);
        });
        getSections();
    }, []);

    return(
        <div style={styles.con}>
            <Navbar/>

            <div className="container" >
                <div style={styles.upSection}>
                    <div style={styles.title}>Hi {jwt(props.token).name}! See your plants:</div>
                </div>
                
                <div style={styles.cardBox}>
                    {sections.map((data) => <FieldCard key={data.id} data={data} token={props.token}/>)}
                    <FieldCardAdd token={props.token}/>
                </div>
            </div>
            
        </div>
    )
}

export default Home;