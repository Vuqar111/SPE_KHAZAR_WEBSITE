import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Book(props) {
  const { book } = props;
  return (
    <Wrapper>
      <div key={book.id} className="bookcard">
        <Link to={`/book/${book._id}`}>
          <img src={book.image} alt={book.title} />
        </Link>
        <div>
          <h2 className="font-bold text-[20px]">{book.title}</h2>
          <div className="text-[15px] p-[10px] bg-[#256F98] text-[white] w-[100%]">
            Download Now {book.title}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
.bookcard {
  width: 370px;
  height: 100%;
  max-heigth: 280px;
  background: 
  margin-top: 20px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
img {
  width: 370px;
  height: 200px;
}


@media (max-width: 768px) {
  .card {
    min-width: 300px;
    width: 100%;
  }

  img {
    width: 100%;
    height: 200px;
  }
  h2 {
    font-size: 20px;
  }
}
 

`;
