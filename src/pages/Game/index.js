import React, { useContext, useState } from "react";
import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import TextBox from "../../Components/TextBox";
import Knife from "../../Assets/images/knife.png";
import BUTTON from "../../Components/Button";
import STORE from "../../Context/store";
import CountDown from "../../Components/CountDown";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";
import { BASE_URL } from "../../constants";

const GAME = () => {
  const { currRound,status, setStatus} = useContext(STORE);

  const [location, setLocation] = useState("");
  const [victim, setVictim] = useState("");
 

  const getStatus = async () => {
    try {
      let headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("tkn"),
      };
      let res = await fetch(`${BASE_URL}quiz/storeAnswer`, {
        method: "POST",
        headers: { ...headers },
        body:JSON.stringify( {
          location: location,
          victim: victim,
        }),
      });
      let data=await res.json()
      if(data.message=="Answer saved successfully."){
;
        setStatus(data);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    if (location !== "" && victim !== "") {
      getStatus();
    } else {
      alert("PLEASE ENTER BOTH THE FIELDS");
    }
  };

  if (currRound && currRound.message === "No rounds live") {
    return (
      <>
        <Navbar />
        {currRound.next_round_start_time ? (
          <>
            <div className="info-text">
              Round Starts In
              <br />
            </div>
            <CountDown end={currRound.next_round_start_time} />
          </>
        ) : (
          <div className="info-text">GAME HAS ENDED</div>
        )}
      </>
    );
  }

  return (
    <>
      <Navbar />
      <SubNav />
      <section className="container">
        <main className="game">
          {status && <div className="status-text">You have {status && status.tries_left} tries left</div>}
          <div className="riddle">
            {currRound && (
              <>
                {" "}
                <div className="line1">{currRound.riddle}</div>
                <div className="line1">{currRound.riddle}</div>
                <div className="line1">{currRound.riddle}</div>
                <div className="line1">{currRound.riddle}</div>
              </>
            )}
          </div>
          <div className="ans">
            <TextBox
              icon={
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 2C13.0837 2.00344 10.2878 3.16347 8.22564 5.22563C6.16348 7.28778 5.00345 10.0837 5.00001 13C4.99652 15.3832 5.77499 17.7018 7.21601 19.6C7.21601 19.6 7.51601 19.995 7.56501 20.052L16 30L24.439 20.047C24.483 19.994 24.784 19.6 24.784 19.6L24.785 19.597C26.2253 17.6996 27.0034 15.3821 27 13C26.9966 10.0837 25.8365 7.28778 23.7744 5.22563C21.7122 3.16347 18.9163 2.00344 16 2ZM16 17C15.2089 17 14.4355 16.7654 13.7777 16.3259C13.1199 15.8864 12.6072 15.2616 12.3045 14.5307C12.0017 13.7998 11.9225 12.9956 12.0769 12.2196C12.2312 11.4437 12.6122 10.731 13.1716 10.1716C13.731 9.61216 14.4437 9.2312 15.2197 9.07686C15.9956 8.92252 16.7998 9.00173 17.5307 9.30448C18.2616 9.60723 18.8864 10.1199 19.3259 10.7777C19.7654 11.4355 20 12.2089 20 13C19.9987 14.0605 19.5768 15.0771 18.827 15.827C18.0771 16.5768 17.0605 16.9987 16 17Z"
                    fill="#F00000"
                  />
                </svg>
              }
              placeholder={"Murder Location"}
              action={(e) => setLocation(e.target.value)}
            />
            <TextBox
              icon={<img src={Knife} />}
              action={(e) => setVictim(e.target.value)}
              placeholder={"Victim"}
            />
          </div>
          <BUTTON disable={status && status.tries_left==0? true : false} lable={"SUBMIT"} action={handleSubmit} />
        </main>
      </section>
    </>
  );
};

export default GAME;
