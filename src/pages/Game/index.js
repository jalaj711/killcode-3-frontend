import React, { useContext, useState, useEffect } from "react";
// import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import TextBox from "../../Components/TextBox";
import Knife from "../../Assets/images/knife.png";
import BUTTON from "../../Components/Button";
import STORE from "../../Context/store";
import CountDown from "../../Components/CountDown";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";

const GAME = () => {
  const { currRound, status, setStatus, setActive, setCurrRound } =
    useContext(STORE);

  const [location, setLocation] = useState("");
  const [victim, setVictim] = useState("");
  const [load, setLoad] = useState(false);
  /* eslint-disable */
  const getStatus = async () => {
    setLoad(true);
    try {
      let headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("tkn"),
      };
      let res = await fetch(`${BASE_URL}quiz/storeAnswer`, {
        method: "POST",
        headers: { ...headers },
        body: JSON.stringify({
          location: location,
          victim: victim,
        }),
      });
      let data = await res.json();
      // co",data);
      if (data.message === "Answer saved successfully.") {
        setStatus(data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoad(false);
  };

  const handleSubmit = (e) => {
    if (location !== "" && victim !== "") {
      getStatus();
    } else {
      alert("PLEASE ENTER BOTH THE FIELDS");
    }
  };

  const navigate = useNavigate();

  const update = async () => {
    try {
      let headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("tkn"),
      };
      let res = await fetch(`${BASE_URL}quiz/round`, {
        headers: { ...headers },
        method: "GET",
      });
      let result = await res.json();

      setCurrRound(result);
    } catch (error) {
      if (error.status == 401) {
        localStorage.removeItem("tkn");
        navigate("/", { replace: true });
      }
    }
  };
  /*eslint-disable */
  useEffect(() => {
    update();
    if (
      !localStorage.getItem("tkn") ||
      localStorage.getItem("tkn") === undefined
    ) {
      setActive(null);
      navigate("/");
    }
  }, []);

  if (localStorage.getItem("end")) {
    return (
      <>
        <div className="container">
          <div className="game">
            <div className="info-text">GAME HAS ENDED</div>
          </div>
        </div>
      </>
    );
  }

  if (!currRound) {
    return <Loading />;
  }

  if (currRound && currRound.message === "No rounds live") {
    return (
      <>
        {currRound.next_round_start_time ? (
          <>
            <div className="container">
              <div className="info-text">
                Round {currRound.next_round} Starts In
                <br />
              </div>
              <CountDown end={currRound.next_round_start_time} />
              <br />
              {currRound.next_round !== "1" && (
                <div className="ans_">
                  {currRound.flag_1 === "0" ? (
                    <div style={{ fontSize: "1.2rem" }}>
                      You have failed to save the victim
                    </div>
                  ) : (
                    <div style={{ fontSize: "1.2rem" }}>
                      You succeeded in saving the victim
                    </div>
                  )}
                  <div className="opinion">
                    {currRound.flag_2 === "1" &&
                      currRound.flag_1 === "0" &&
                      "The victim has been saved by some other people.The killer however is still out there and had sent his henchman to do the deed. These are the things we could retrieve from the henchman, i.e. the notes he was told to leave at the crime scene and the weapons he was going to use."}
                  </div>
                  {currRound.next_round !== "1" && (
                    <div className="info-evi">
                      {currRound.correct_ans}
                      <br />
                      {currRound.flag_2 === "0" &&
                        currRound.flag_1 === "0" &&
                        "The killer has left these in the crime scene. Think and mark your steps carefully."}
                      {currRound.flag_1 === "1" &&
                        "The killer however is still out there and had sent his henchman to do the deed. These are the things we could retrieve from the henchman, i.e. the notes he was told to leave at the crime scene and the weapons he was going to use."}
                      <div>
                        <img
                          src={`${BASE_URL}media/${currRound.encrypt_img}`}
                          alt=""
                        />
                        <img
                          src={`${BASE_URL}media/${currRound.evidence_img}`}
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
              {currRound.next_round == 1 && (
                <div className="container">
                  <div className="fore-word">
                    This is a tale of two brothers, who had been raised in a
                    deeply religious household, and had grown distant over the
                    years, driven apart by their opposing ideologies and
                    conflicting beliefs. The older brother had amassed a
                    following of devoted followers who shared his vision of a
                    world, while the younger brother had chosen a quieter path,
                    content to live a simple life away from the limelight.
                    <br />
                    <br />
                    Their paths rarely crossed, until one fateful day when the
                    older brother was found dead under mysterious circumstances.
                    Shocked and saddened by the news, the younger brother
                    couldn't shake the feeling that there was more to his
                    brother's death than met the eye.
                    <br />
                    <br />
                    With a heavy heart and a determination to uncover the truth,
                    the younger brother began to investigate, piecing together
                    clues and following leads, all while grappling with the
                    painful realization that he and his brother had become
                    strangers in each other's eyes.
                    <br />
                    <br />
                    Fast forward to the present day, the early morning sun
                    streamed through the train window as she made her way to
                    work, the rhythmic clack of the train tracks providing a
                    soothing background noise. As she settled into her seat, she
                    exchanged a quick nod with a stranger who had sat down
                    beside her. He buried his face in a newspaper, seemingly
                    engrossed in its contents.
                    <br />
                    <br />
                    But as the stranger disembarked at the next station, he
                    accidentally dropped a piece of paper. The woman, curious,
                    picked it up and began to read. Her eyes widened as she took
                    in the chilling message that was written on the paper. It
                    described in detail someone who was about to die, and the
                    description matched her own features almost perfectly.
                    <br />
                    <br />
                    Her heart racing, the woman tried to brush off the unnerving
                    message as a mere coincidence. But the fear lingered in the
                    back of her mind as she went about her day. And when news
                    broke the next day of her lifeless body being discovered in
                    her cabin, her many followers and loved ones were left
                    questioning whether the message was somehow connected to her
                    untimely demise.
                    <br />
                    <br />
                    Had the stranger on the train been a harbinger of death? Was
                    the message a warning that had gone unheeded? As the
                    investigation unfolded, the mystery only deepened, leaving
                    everyone wondering who or what was behind the tragic event.
                    <br />
                    <br />
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="info-text-final">TIME TO SOLVE KILL CODE</div>
        )}
      </>
    );
  }

  if (load) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      {/* <Navbar /> */}
      <SubNav />
      <section className="container">
        <main className="game">
          {status && (
            <div className="status-text">
              You have {status && status.tries_left} tries left
            </div>
          )}
          <div className="riddle">
            {currRound && (
              <>
                <div
                  dangerouslySetInnerHTML={{ __html: `${currRound.riddle}` }}
                  className="line1"
                />
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
          <BUTTON
            disable={status && status.tries_left == 0 ? true : false}
            lable={"SUBMIT"}
            action={handleSubmit}
          />
        </main>
      </section>
    </>
  );
};

export default GAME;
