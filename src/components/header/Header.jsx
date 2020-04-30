import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRznz1PWxWmvGz-iYdgOaxtiLu2TFaMhqbQ5wqx7MEqwHO4CDeg&usqp=CAU"/>
            </div>
        </header>
    );
}

export default Header;