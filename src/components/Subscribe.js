import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
const Subscribe = () => {
  return (
    <Wrapper>
      <div className="subscribe">
        <div className="subscribebtn">
             <p>Do you have idea or offer? Let's run away</p>
             <button >
               <Link to="/contact">
               Let's contact
               </Link></button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Subscribe;


const Wrapper = styled.div`
width: 100%;
color: white;
margin-top: 50px;
.subscribe{
    padding: 30px;
}
.subscribe h1{
text-align: center;
font-size: 45px;
}
.subscribe .boxes{
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 90%;
margin: auto;
}
.subscribe .box{
    padding: 30px;
}

.subscribebtn {
    margin-top: 30px;
    text-align: center;
    color: black;

}
.subscribebtn p{
    font-size: 30px;
}
.subscribebtn button{
    width: 300px;
    border-radius: 0px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

@media (max-width: 768px) {
  .subscribe{
    padding: 10px;
}
.subscribe h1{
text-align: center;
font-size: 25px;
}
.subscribe .boxes{
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100%;
margin: auto;
}
.subscribe .box{
    padding: 10px;
    text-align: center;
}

.subscribebtn {
    margin-top: 30px;
    text-align: center;
}
.subscribebtn p{
    font-size: 15px;
    font-weight: bold;
}
.subscribebtn button{
    width: 150px;
    border-radius: 0px;
    padding: 10px;
}

}
`
