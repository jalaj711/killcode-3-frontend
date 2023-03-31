import React, { useState, useEffect } from "react";
// import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import { BASE_URL } from "../../constants";
import Loading from "../../Components/Loading";

const GAME = () => {
  const [clue, setClue] = useState("");
  const [load, setLoad] = useState(false);
  /* eslint-disable */
  const getStatus = async () => {
    setLoad(true);
    try {
      const search = new URLSearchParams(window.location.search);
      let headers = {
        "Content-Type": "application/json",
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
  /*eslint-disable */
  useEffect(() => {
    getStatus();
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
