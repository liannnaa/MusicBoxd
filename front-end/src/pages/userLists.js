import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import "./userLists.css";

import List from "../components/listMini";
import Menu from "../components/menu";

const UserLists = () => {
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

    const [user, setUser] = useState([]);
    useEffect(() => {
        axios
          .get(`https://my.api.mockaroo.com/user.json?key=${process.env.REACT_APP_MOCKAROO}`)
          .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setUser(parsedData.data[0]);
          })
          .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <div className="user-lists">
            <span className="user-lists-title">
                <span className="user-lists-username">
                    {user.name || "User Name"}'s
                </span>
                {" "}Lists
            </span>
            <div className="user-lists-mini">
                {lists.slice(0, 5).map((list) => (
                    <List key={list.id} list={list} />
                ))}
            </div>
            <div className="user-lists-menu">
                <Menu/>
            </div>
        </div>
    );
};
export default UserLists;
