import React from "react";
import styled from "styled-components";
import { teams } from "../data";
const Teams = () => {
  return (
    <Wrapper>
      <div className=" p-[20px]">
        <h1 className="font-bold text-[30px] text-center">Teams</h1>
        <div className="flex justify-between flex-wrap teamsmain">
          {teams.map((team) => {
            return (
              <div className="card">
                <img src={team.img} alt={team.name} />
                <div className="teamfooter">
                  <h3>{team.name}</h3>
                  <p>{team.status}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Teams;

const Wrapper = styled.div`
width: 80%;
margin: auto;


.card {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: auto;
    text-align: center;
    border-radius: 10px;
    margin: 15px;
}
img {
    width: 100%;
    height: 300px;
}


.teamfooter
background: white;
h3 {
    font-size: 25px;
    font-weight: bold;
}
p{
    color: #256F98;
}
}

@media (max-width: 768px) {
    width: 100%;
    margin: auto;

    .teamsmain {
      justify-content: center;
    }
.card {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;
    text-align: center;
    border-radius: 10px;
    margin: 15px;
}
img {
    width: 100%;
    height: 250px;
    border-radius: 5px;
}


.teamfooter
background: white;
h3 {
    font-size: 20px;
    font-weight: bold;
}
p{
    color: #256F98;
}
}
}
`;
