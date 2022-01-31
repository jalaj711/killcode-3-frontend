import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants";

const STORE = React.createContext();



export const PROVIDER = ({ children }) => {




  const [status, setStatus] = useState();
  // For navbar active setup
  const [active, setActive] = useState(0);
  // Current Round data
  const [currRound, setCurrRound] = useState({});
  const [user, setUser] = useState({});

  const [apiCall, setApiCall] = useState(true);
  

  const getData = async () => {
    try {
      let headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("tkn"),
      };
      let res = await fetch(`${BASE_URL}quiz/round`, {
        headers: { ...headers },
        method:"GET"
      });
      let result=await res.json();
      setCurrRound(result);
    } catch (error) {
      console.log(error);
      setCurrRound(error)
    }
  };
 /* eslint-disable */
  useEffect(() => {
    if (apiCall) {
      getData();
      setApiCall(false);
    } 
  }, [apiCall]);





  return (
    <STORE.Provider
      value={{
        active,
        setActive,
        currRound,
        setCurrRound,
        user,
        setUser,
        setApiCall,status, setStatus
      }}
    >
      {children}
    </STORE.Provider>
  );
};

export default STORE;

/*

*/
