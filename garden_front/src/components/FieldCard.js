import React, { useState } from "react";
import { Link } from "react-router-dom";

const styles = {
    cardBack: {
        backgroundColor: "#add99c",
        width:"35%",
        height:"250px",
        border: "5px solid #a3d190",
        borderRadius: "10px",
        margin: "25px",
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: 'pointer'
    },
    upperRow: {
        display:"flex",
        float:"left",
        alignItems:"center",
        paddingLeft: "15px",
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
        fontSize:"20px",
        fontStyle: "oblique",
        fontWeight: "bold",
        color:"#fffffa "
    },
    dane: {
        marginLeft:"10px",
        width:"100%",
        minWidth:"100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    elem: {
        padding:"5px 15px",
        border: "2px dashed #21421d",
        borderRadius: "10px",
        textDecoration: "none",
        color: "#04241e"
    },
    delete: {
        width: "100%",
        backgroundColor: "#ff2445",
        fontSize:"24px",
        fontStyle: "oblique",
        fontWeight: "bold",
        color:"#fffffF",
        marginBottom: "10px",
        padding: "5px",
        border: "5px solid #ff2445",
        borderRadius: "10px",
    },
    link:{
        width: "100%",
    }
}

const FieldCard = (props) => {

    const [sure, setSure] = useState(false);
    const [removeText, setRemoveText] = useState("Remove?");

    const remove = async () => {
        if(!sure) {
            setRemoveText("Are you sure?")
            setSure(true)
            return;
        }
        setRemoveText("Removing");
        await fetch("http://localhost:3001/api/sections/"+props.data.id, {
            method:"DELETE",
            headers: {"authorization": props.token}
        });
    };

    return(
        <div style={styles.cardBack}>

            <button style={styles.delete} onClick={remove}>{removeText}</button>

            <Link to={{pathname: '/chart/'+props.data.id}} style={styles.link}>
                <div style={styles.upperRow}>
                    <img src={props.data.type+".png"} alt={props.data.type} style={styles.image}/>
                    <div>
                        <div style={styles.sectionTitle}>{props.data.name}</div>
                        <div style={styles.sectionTitle}>({props.data.type})</div>
                    </div>
                </div>
                <div style={styles.clear}></div>
                <div style={styles.dane}>

                    {props.data.lastData ? 
                    (
                        <>
                        <span style={styles.elem}>  {props.data.lastData.temp} C  </span>
                        <span style={styles.elem}>  {props.data.lastData.pressure} hPa  </span>
                        <span style={styles.elem}>  {props.data.lastData.humidity} %  </span>
                        </>
                    ): (
                        <>
                        <span style={styles.elem}>  ? C  </span>
                        <span style={styles.elem}>  ? hPa  </span>
                        <span style={styles.elem}>  ? %  </span>
                        </>
                    )}
                    
                    
                </div>
            </Link>
        </div>
    )
}

export default FieldCard;