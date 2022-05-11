import React from "react";
import { Link } from "react-router-dom";
import carrot from "./carrot.png";

const styles = {
    cardBack: {
        backgroundColor: "#add99c",
        width:"35%",
        height:"225px",
        border: "5px solid #a3d190",
        borderRadius: "10px",
        margin: "25px",
        padding:"15px",
        cursor: 'pointer'
    },
    upperRow: {
        display:"flex",
        float:"left",
        alignItems:"center",
        justifyContent:"space-between"
    },
    clear:{
        clear: "both"
    },
    image: {
        height:"75px",
        width: "75px",
        margin:"25px"
    },
    sectionTitle: {
        fontSize:"24px",
        fontStyle: "oblique",
        fontWeight: "bold",
        color:"#fffffa "
    },
    dane: {
        padding:"15px",
        marginLeft:"10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    elem: {
        padding:"5px 15px",
        border: "2px dashed #21421d",
        borderRadius: "10px",
        textDecoration: "none",
        color: "#faf0e6"
    }
}

const FieldCard = (props) => {

    const handleClick = () => {
        alert("pog");
    }

    return(
        <Link to='/chart' style={styles.cardBack} onClick={()=>{handleClick() }}>
            <div style={styles.upperRow}>
                <img src={carrot} alt="carrot" style={styles.image}/>
                <div style={styles.sectionTitle}>  Marchewki </div>
            </div>
            <div style={styles.clear}></div>
            <div style={styles.dane}>
                <span style={styles.elem}>  21.37 C  </span>
                <span style={styles.elem}>  969 hPa  </span>
                <span style={styles.elem}>  42.0 %  </span>
            </div>
        </Link>
    )
}

export default FieldCard;