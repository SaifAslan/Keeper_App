import React from "react";

let d = new Date;

function Footer(){
    return <footer className= "footer"><p>Copyright {d.getFullYear()}</p></footer>;
}

export default Footer;