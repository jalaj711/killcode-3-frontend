import React, { useState, useEffect } from "react";
// import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";

const GAME = () => {
  const [clue, setClue] = useState("");
  const [load, setLoad] = useState(false);
  /* eslint-disable */
  const getStatus = async () => {
    setLoad(true);
    try {
      const search = new URLSearchParams(window.location.search);
      console.log(search.get('clue_id'));
      let headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("tkn"),
      };
      let res = await fetch(`${BASE_URL}quiz/unlockClue?clue_id=` + search.get("clue_id"), {
        headers: { ...headers }
      });
      let data = await res.json();
      // co",data);
      if (data.status === 200) {
        setClue(data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoad(false);
  };

  const navigate = useNavigate();

  /*eslint-disable */
  useEffect(() => {
    getStatus();
    if (
      !localStorage.getItem("tkn") ||
      localStorage.getItem("tkn") === undefined
    ) {
      setActive(null);
      navigate("/");
    }
  }, []);

  if (load) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <SubNav />
      <div className="info-evi">
        Location: {clue.location}
        <br />
        {clue.content}
      </div>
    </>
  );
};

export default GAME;
