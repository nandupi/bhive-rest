import React from "react";
import style from "./home.module.css"
import { Link } from "react-router-dom";

const Homecrud=()=>{
    return(
        <section id={style.nav}>
            <Link to="/createuser">CREATE USER</Link>
            <Link to="/users">USERS</Link>
        </section>
    )
}
export default Homecrud