import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const styles = {
    notfoundback: {
        backgroundColor:"#21421d",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        color: "#f2ead5",
        padding:"15px"
    },
    backbutton: {
        textDecoration: "none",
        fontSize:"24px"
    }
};

const NotFound = (props) => {
   return (
    <div>
        <Navbar />
        <div >
            <h1>404 - Not found!</h1>
            <p>Page you are looking for does not exist.</p>
            <hr/>
            <p>Go back to Home</p>
            <Link  to="/" style={styles.backbutton}>Home</Link>
        </div>
    </div>
   )
};

export default NotFound;