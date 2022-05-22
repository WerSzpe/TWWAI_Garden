import React, { useState } from 'react';
import { Link } from "react-router-dom";

const styles ={
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
        margin:"25px",
        marginBottom:"80px"
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
    },
    input:{
      width: "100%",
      backgroundColor: "#7db96c",
      border:"1px solid #9dc98c",
      fontSize:"24px",
      fontStyle: "oblique",
      fontWeight: "bold",
      color:"#fffffF",
      marginBottom: "10px",
      marginTop: "10px",
      padding: "5px"
    },

    select:{
      width: "100%",
      backgroundColor: "#7db96c",
      border:"1px solid #9dc98c",
      fontSize:"24px",
      fontStyle: "oblique",
      fontWeight: "bold",
      color:"#fffffF",
      marginBottom: "10px",
      padding: "5px"
    },
    button:{
      width: "100%",
      backgroundColor: "#7db96c",
      border:"1px solid #9dc98c",
      fontSize:"24px",
      fontStyle: "oblique",
      fontWeight: "bold",
      color:"#fffffF",
      marginBottom: "10px",
      padding: "5px"
    }
};

const FieldCardAdd = (props) => {
    const [type, setType] = useState("carrot");
    const [name, setName] = useState("");

    const create = async () => {
        await fetch("http://localhost:3001/api/sections", {
            method:"POST",
            headers: {'Content-Type': 'application/json', "authorization":props.token},
            body: JSON.stringify({name:name, type:type})
        });
        setType("carrot");
        setName("");
    };

    return(
        <div style={styles.cardBack}>
            <div style={styles.upperRow}>
                <img src={type+".png"} alt={type} style={styles.image}/>
                <div>
                    <input style={styles.input} value={name} placeholder="Name" onChange={event => setName(event.target.value)} />
                    <select style={styles.select} defaultValue="carrot" onChange={e => setType(e.target.value)}>
                        <option value="carrot">Carrot</option>
                        <option value="cabagge">Cabagge</option>
                        <option value="beetroot">Beetroot</option>
                        <option value="beans">Beans</option>
                        <option value="parsley">Parsley</option>
                        <option value="lettuce">Lettuce</option>
                        <option value="zuccini">Zuccini</option>
                    </select>
                    <input style={styles.button} type="submit" value="Add section" onClick={create}/>
                </div>
            </div>
            <div style={styles.clear}></div>
        </div>
    )
};

export default FieldCardAdd;