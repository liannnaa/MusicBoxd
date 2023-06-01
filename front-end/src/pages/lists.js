import React from 'react';
import "./lists.css";

import List from "../components/listMini";
import Menu from "../components/menu";

const Lists = () => {
    return (
        <div className="lists">
            <span className="lists-title">
                Popular Lists
            </span>
            <div className="lists-mini">
                <List/>
                <List/>
                <List/>
            </div>
            <div className="lists-menu">
                <Menu/>
            </div>
        </div>
    );
};
export default Lists;
