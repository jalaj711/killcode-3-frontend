import React from "react";

import Navbar from "../../Components/Navbar";

const RULES = () => {
  const content = (
    <>
      <div className="heading">RULES</div>
      <ul className="rules-list">
        <div className="list-item">
          1. KILLCODE III starts at 10:00 am on April 1st, 2023. The game is
          compatible to run on the new versions of Brave and Chrome. The event
          consists of several rounds, played over two days. First few rounds
          will be held on April 1st, and the remaining rounds on April 2nd.
        </div>
        <div className="list-item">
          2. All rounds are timed. The point of each round is to save the next
          victim before the killer gets to them, i.e. identifying BOTH the
          victim’s name as well as their location from the given clues. If one
          or more than one of the participating teams identifies the next
          victim’s name and the place of death before the timer runs out, the
          victim will be saved. Otherwise, the killer will execute them.
          Alternatively, one can also identify the Killcode, thus identifying
          the killer and saving all future victims.
        </div>
        <div className="list-item">
          3. Once the timer for each round runs out, you cannot answer that
          round anymore. Regardless of whether you have attempted that round or
          not, you must move on to the next round.
        </div>
        <div className="list-item">
          4. Each round on day one is 40 minutes, with a 5 minute break between
          two consecutive rounds. All rounds on second day are of 30 minutes
          only.
        </div>
        <div className="list-item">
          5. You will be informed when the last round will begin.
        </div>
        <div className="list-item">
          6. Each team gets a total of 10 attempts per round. An attempt
          consists of both answers mandatorily that the round requires, i.e. the
          victim’s name and the place of murder. However, only your last attempt
          in each round will be considered, regardless of whether or not your
          previous answer was correct. Answers are not case-sensitive, or
          space-sensitive.
        </div>
        <div className="list-item">
          7. The correct answer will only be released during the result break in
          between the two rounds. You must submit your attempts before the timer
          runs out, but your answer will not be verified till the result break.
          During the result break, all teams will get to know the victim’s
          information and whether they had been saved or not.
        </div>
        <div className="list-item">
          8. Each round has 200 marks for answering it correctly. There is no
          partial marking. The final round (KILLCODE) is worth 1600 points.
        </div>{" "}
        <div className="list-item">
          9. However, you are free to attempt the Killcode during any round in
          the game. A correct attempt gives you 1600 points right then and
          there. The game freezes and de facto, you win; i.e. identifying the
          correct killcode identifies the killer and freezes the leaderboard
          instantly. However, every wrong attempt at the killcode costs a
          penalty, which is half the number of points in that specific round in
          which the attempt has been made. Last round, which is exclusively for
          guessing the Killcode has no penalties for any wrong attempts.
        </div>
        <div className="list-item">
          10.The map provided to you in-game is not to scale, and is entirely
          fictitious. It is a map given to you by the killer.
        </div>
        <div className="list-item">
          11. All the evidence gathered in previous rounds will be accessible
          even after the timer for those rounds have run out under the Evidence
          Tab. At any point in the game, you are free to access evidence from a
          previous round.
        </div>
        <div className="list-item">
          11. There are extra marks for submitting the theory of the murder of
          any given round as well. In any round, you can offer to present a
          theory to the OC which explains your theory regarding the current
          round. guessing a correct theory gets you 70 points, if you give the
          theory in the same round. Otherwise, 50 rounds.
        </div>
        <div className="list-item">
          12. All the evidence gathered in previous rounds will be accessible
          even after the timer for those rounds have run out under the Evidence
          Tab. At any point in the game, you are free to access evidence from a
          previous round.
        </div>
        <div className="list-item">
          13.In case of any conflicts, all decisions made by the Organizing
          Committee, The Debating Society, NIT Durgapur will be final and
          binding. We wish you good luck.
        </div>
      </ul>
    </>
  );

  return (
    <>
      <Navbar />
      <section className="container">
        <main className="rules">{content}</main>
      </section>
    </>
  );
};

export default RULES;
