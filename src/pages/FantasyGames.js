import React,{useState} from 'react'
import "../styles/components/page.scss";
import "../styles/components/fantasy.scss";
import HeaderTop from '../components/HeaderTop';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer'
import SlotNote from '../components/fantasyGames/slotNote';
import CasinoBanner from '../components/fantasyGames/casinoBanners';
import FantasyDetail from '../components/fantasyGames/fantasydetails';


export default function FantasyGames() {
    const [selected,setSeleted] = useState(0)
    const [fade,setFade] = useState(true);
    const games=[{
        "name":"Diam11",
        "imageurl":"https://sitethemedata.com/casino_icons/other/diam11.png",
        "details":[
          {
          "title":"Description",
          "data":`<ol class="list-decimal">
          <li>
            Any participant in Diam-11 can form a team on
            his own, however the team must have 11 players
            of which a maximum of 7 players can be selected
            from the same team of the actual teams. For
            example, one can select a maximum of 7 players
            from India in an IND vs AUS match.
          </li>
          <li>
            The team can be formed in any different
            combination without exceeding the 100 credit,
            additionally the same team must have the
            following combination in order to get qualified.
            <table class="m-1">
              <thead>
                <tr>
                  <th>Player Type</th> <th>Min</th>
                  <th>Max</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wicket Keeper - WK</td> <td>1</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Batsman - BAT</td> <td>3</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>All Rounder - AR</td> <td>1</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Bowler - BWL</td> <td>3</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            Captain and Vice-captain has to be assigned once
            the team is selected.
          </li>
          <li>
            Once the line-up flag has been announced:
            <ol class="list-outside">
              <li>
                Changes in the existing team can be done,
                however captain and vice-captain cannot be
                changed.
              </li>
              <li>New teams cannot be formed.</li>
              <li>
                Teams already formed can join any contest if
                the same haven’t joined any.
              </li>
            </ol>
          </li>
          <li>
            Once the live flag is announced:
            <ol class="list-outside">
              <li>No changes will be permitted.</li>
              <li>
                No team can join any new contest, even if
                the team has been created before live flag.
              </li>
            </ol>
          </li>
          <li>
            Substitutes will not be awarded any points for
            their contribution.
          </li>
          <li>
            If a player gets replaced by substitute, but
            later comes back on field, he will get points
            for his contributions. However, if a player, who
            was not a part of the announced lineups, comes
            to the field as a substitute, he will not get
            points for any of his contributions.
          </li>
          <li>
            Super over is not included in our point system.
            Therefore, no points will be awarded for any
            contribution in super over.
          </li>
          <li>
            The points awarded in live are subjected to
            changes based on the changes in live, for
            example a wicket given, and the decision has
            been reversed based on DRS or any other fact.
          </li>
          <li>
            Winners will be declared post completion of the
            match.
          </li>
          <li>
            These rules doesn’t apply to any other Fancy or
            Fancy-1 markets.
          </li>
          <li>
            Winning of any mentioned pots will be decided
            based on the number of participants joined. For
            example, the winning of a 100 participant pot
            will be different if the entire 100 participants
            has joined and if only 60 participants has
            joined.
          </li>
        </ol>`
        },
        {
          "title":"How to play",
          "data":`<ol class="list-decimal">
          <li class="mb-1">
            <b>What is Diam11?</b>
            Diam11 is a Game of Skill where you create a
            team of real players for an upcoming match and
            compete with other fans for big prizes. Your
            team earns points based on your players’
            performances in the real-life match, so make
            sure you make the right choices!
          </li>
          <li class="mb-1">
            <b>How to play Diam11?</b>
            The first step will be to create a user ID in
            our website. The next step is to create your
            Diam XI team. and hence, it is imperative to
            understand the rules you know to score the
            maximum points.
            <ol class="list-outside">
              <li>
                <b>Step 1:</b> Log into your user ID and
                then select any of the matches which will be
                visible from the current or upcoming cricket
                tournaments under Diam11 tab. Now, before
                you proceed towards creating your Fantasy XI
                team – and you have to keep in mind that you
                put into mind your knowledge and expertise
                and judgement and pick the players who you
                think will play a key role in scoring
                points. Diam11 hosts games across many
                different sports. Click on an upcoming match
                you want to play and keep an eye on the
                match deadline. Every cricket team you build
                on Diam11 has to have 11 players, of which a
                maximum of 7 players can be from any one
                team playing the real-life match. Player
                Combinations: Your Diam11 team can have
                different combinations of players, but has
                to be within the 100 credit cap and must
                qualify the team selection criteria Create
                Your Teams.
              </li>
              <li>
                <b>Step 2:</b> Now, the time has come when
                you can create your team with a budget of
                100 credits! All you need to do now is to
                select a game and then click the option
                ‘Create Team’. All you need to do is to pick
                a minimum of 1 wicket-keeper, between 3 to 5
                batsmen, and then 1 to 3 all-rounders as
                well as 3 to 5 bowlers – the summation of
                all players should be equal to 100 credits.
                The different combinations are already
                listed there. You can pick and choose what
                you think is the best combination for the
                particular match. Use your knowledge of
                sports to pick a team within a budget of 100
                credits who you think will score the most
                points for the selected match. Remember, you
                can create and join contests with up to any
                number of teams for every match, so try
                different combinations to improve your
                chances of winning.
              </li>
              <li>
                <b>Step 3:</b> After picking the team, you
                have to select your team’s Captain and
                Vice-Captain. The captain gets two times the
                points scored by him in the actual game.
                Also, the vice-captain gets one and a half
                times the points.
              </li>
            </ol>
          </li>
          <li class="mb-1">
            <b>What are credits?</b>
            Credits are the cost of a player. In-form and
            star players typically cost more credits, while
            inexperienced or non-regular players cost less.
          </li>
          <li class="mb-1">
            <b>What are Diam11Points?</b>
            Diam11 Points are earned by real-life players on
            the basis of their performances in a match. For
            example, players earn points for scoring runs,
            taking wickets, etc. (cricket), scoring goals,
            making assists, etc. (football) and similar
            actions for other sports. You can check out the
            Diam11 Points System under each sport for more
            details.
          </li>
          <li class="mb-1">
            <b>Can I edit my team after I create it?</b>
            You can edit your team as many times as you like
            before the match deadline.
          </li>
        </ol>`
        }
      ]
    },
    {
        "name":"PLAYER BATTLE",
        "imageurl":"https://sitethemedata.com/casino_icons/other/playerbattle.jpeg",
        "details":[
          {
            "title":"Description",
            "data":`<ol class="list-decimal"><li>Player battle is a skill game where any user can select real players and play against computer.
            </li> <li>User can select his set of players based on the event type. For example, 2vs2 or 4vs4 based on
                the game category.</li> <li>Computer will get default point (points will be based on game category (2vs2/ 4vs4)) if the
                player selects the first player, vice versa player will get default points if he allows computer
                to select the first player.</li> <li>If any player who has been selected is not included in playing 11 or didn’t get opportunity to
                play (bat): - Default runs which was announced in advance will be given to them respectively.
            </li> <li>User are allowed to make any changes in the team before placing the bet, Once the bet is
                confirmed user will not be allowed to make any change in the current team. However, user is
                allowed to create new team and participate.</li> <li>Results will be announced post the match.</li> <li>If the match got interrupted due to any situation such as rain/bad light and the same gets
                stopped. Default run/run scored whichever is the highest will be awarded for the players who
                haven’t finished their quota. For example, In a IND vs ENG T20 match England has completed
                playing 20 over and India got to play 10 over post that the match got stopped due to rain, Then
                Indian players will get points based on the above mentioned rule. (Note: This is not applicable
                to the player who has already got out before the match got stopped)</li></ol>`
          }
        ],
    },
    {
        "name":"POP THE BALL",
        "imageurl":"https://sitethemedata.com/casino_icons/other/poptheball.jpg",
        "details":[
          {
            "title":"Description",
            "data":`<ol class="list-outside"><li>Before the round starts the player needs to place his/her bet.</li> <li>The player can use "auto bet" and "auto cash out" features.</li> <li>Minimum bet amount is 500 Pts.</li> <li>Maximum bet amount is 5,000 Pts.</li> <li>Maximum win amount is 250,000 Pts.</li> <li>The player can place 2 bets simultaneously during a single round.</li> <li>The winning amount is calculated by multiplying the coefficient by the bet's amount. </li></ol>`
          },
          {
            "title":"How to play",
            "data":`<ol class="list-outside"><li><b>Quick explanation:</b> <ol class="list-outside"><li>The player needs to place a bet and then wait till the cannon strikes.</li> <li>The player needs to click on "cash out" button before the coefficient explodes.</li> <li>The player wins if he or she cashes out before the coefficient explodes.</li> <li>The player loses if he or she hasn't cashed out before the coefficient explodes.</li></ol></li></ol>`
          }
        ],
    },
    {
        "name":"LUDO CLASSIC",
        "imageurl":"https://sitethemedata.com/casino_icons/other/ludoclub.jpg",
        "details":[
          {
            "title":"Description",
            "data":`<ol class="list-decimal"><li class="mb-1"><b>How To Play?</b>
            For those who haven’t played the game before, Ludo is an easy to play a strategy board game which is largely automatic, with a player’s only choice is to roll a dice and select a token to move forward. And once there is a token that you can move, the computer automatically does it for you. And while the centre piece of the digital version of the game is Ludo, the app also comes with a Snakes &amp; Ladders game that can be played the same you did as a kid.
        </li> <li class="mb-1"><b>Game Modes</b>
            You can play Ludo against your friends and play online against players from all around the world. 
        </li></ol>`
          },
          {
            "title":"Rules",
            "data":`<ol class="list-decimal"><li>It is played between 2 or 4 Players, with every player having 4 tokens. The player who manages to get all of his four tokens home (reaches the centre of the board) first is declared the winner.</li> <li>A token can only move out from the base and start to move after a six is rolled by that player.</li> <li>Once a six is rolled out, that player gets one more turn to roll the dice.</li> <li>When player rolls six three times in a row, it skips their turn.</li> <li>If a token crosses the finish line, the player gets to roll another dice.</li> <li>If a token captures another token, the capturing player gets to roll another dice.</li> <li>The board has a total of eight safe squares which are coloured squares and starred squares.</li> <li>The tokens need to exit every player’s base and move around the board to win.</li> <li>Each user have 5 automoves. In case of player inactivity  automove being used.</li> <li>Player lose game if all automoves  being used.</li></ol>`
          }
        ],
    }
];
function changeTrainsition(i){
    console.log("fghjd");
    setFade(!fade)
    setTimeout(() => {
        setFade(true)
        setSeleted(i);
    }, 500);
}
    return (
      <div className="page-container">
        <HeaderTop />
        <div className="main-container">
          <DashboardHeader />
          <div className="report-container">
          <div className="mid-container">
            <SlotNote/>
            <CasinoBanner games={games} selected={selected} changeTransition={(i)=>changeTrainsition(i)} />
             <FantasyDetail games={games[selected]} fade={fade} />
          </div>
            <Footer />
          </div>
        </div>
      </div>
    );
}
