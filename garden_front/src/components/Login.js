import React, {useState} from 'react';
import Navbar from './Navbar';

const styles = {
    con: {
        backgroundColor:" #faf7e1"
    },

    loginBox: {
            display:"flex",
            alignItems: "center",
            justifyContent:"center",
            backgroundColor: "#add99c",
            width: "90%",
            margin: "50px",
            minHeight:"70vh",
            border: "5px solid #a3d190",
            borderRadius: "10px",
            flexDirection:"column",
            cursor: 'pointer',
            marginBottom: "50px",
    },

    text:{
      fontSize:"24px",
      fontStyle: "oblique",
      fontWeight: "bold",
      color:"#fffffF",
    },

    input:{
      width: "70%",
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

    button:{
      width: "50%",
      backgroundColor: "#7db96c",
      border:"1px solid #9dc98c",
      fontSize:"24px",
      fontStyle: "oblique",
      fontWeight: "bold",
      color:"#fffffF",
      marginBottom: "10px",
      padding: "5px"
    },
    container:{
      height: "80vh"

    }
};

const Login = (props) => {

  const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [header, setHeader] = useState("Welcome! Please log in to continue")

    const login = async () =>{
      try{
        const res = await fetch("http://localhost:3001/api/login", {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({name:username, password:password})
        })
        if(res.status !==200){
          setHeader(await res.text())
          setUsername("")
          setPassword("")
             return;
        }
        const data = await res.json();
        console.log(data);
        localStorage.setItem("token", data.token);
        window.location.replace("/");

      }
      catch(error){
        console.log(error)
          setHeader("An error occured")
          setUsername("")
          setPassword("")
      }
    }


    return(
        <div style={styles.con}>
            <Navbar hideLinks={true}/>

            <div style={styles.container} >
              <div style={styles.loginBox}>
                <h3 style={styles.text}>{header}</h3>
                <input placeholder="Username"style={styles.input} value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder="Password" type="password" style={styles.input} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" style={styles.button} value="Log in" onClick={() => login()}/>
              </div>
            </div>

        </div>
    )
}

export default Login;