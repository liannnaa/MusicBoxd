import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import "./lists.css";

import List from "../components/listMini";
import Menu from "../components/menu";

const Lists = () => {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        axios
          .get(`https://my.api.mockaroo.com/list.json?key=${process.env.REACT_APP_MOCKAROO}`)
          .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setLists(parsedData.data);
          })
          .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <div className="lists">
            <span className="lists-title">
                Popular Lists
            </span>
            <div className="lists-mini">
                {lists.slice(0, 3).map((list) => (
                    <List key={list.id} list={list} />
                ))}
            </div>
            <div className="lists-menu">
                <Menu/>
            </div>
        </div>
    );
};
export default Lists;
