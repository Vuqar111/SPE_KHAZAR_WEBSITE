import React, { useState, useEffect } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listBooks } from "../common/actions/bookActions";
import  bookHeadingImage from "../common/assets/images/library.jpg";
import styled from "styled-components";
import {Link} from 'react-router-dom';
export default function HomeScreen() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  console.log(books);

  return (
    <Wrapper>
      <div>
        <div className="imgdiv">
          <img className="img" src={bookHeadingImage} alt="bookHeadingImage"/>
          <div className="abouttext">
            <h2>Accelerating research discovery to shape a better future</h2>
            <h1>Today's research, tomorrow's innovation</h1>
            <input
              type="text"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              className="w-[70%] h-[auto] p-[10px]"
              placeholder="Search something"
            />
          </div>
        </div>

        <div className="books mt-[80px]">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="w-[90%] m-[auto] mainbooks flex justify-between flex-wrap">
              {books
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((book) => (
                  <div key={book.id} className="bookcard">
                    <Link to={`/book/${book._id}`}>
                      <img src={book.image} alt={book.title} className="cardimg" />
                    </Link>
                    <div>
                      <h2 className="font-bold text-[20px]">{book.title}</h2>
                      <div className="text-[15px] p-[10px] bg-[#256F98] text-[white] w-[100%] downloadbtn">
                        <Link to={`/book/${book._id}`}>
                          See Details
                        </Link>
                     </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
.contentabout {
    width: 95%;
    padding: 10px;
  }

  .imgdiv {
    position: relative;
  }
  img {
    width: 100%;
    max-height: 500px;
    height: 100%;
    object-fit: cover;
  }
  input {
    outline: none;
    border: none;
    
  }
  input[type="text"]
{
  color: black;
    font-size:24px;
}
  input::placeholder {
    font-size: 24px;
  }
  .abouttext {
    width: 70%;
    margin: auto;
    position: absolute;
    font-size: 85px;
    color: white;
    font-weight: bold;
    text-align: center;
  }
  .abouttext h2 {
    font-size: 36px;
    
  }
  .abouttext h1 {
    font-size: 40px;
    font-weight: bold;
  }


  
  /* Cards */
  .bookcard {
  width: 320px;
  height: 100%;
  height: 350px;
  background: blue
  margin-top: 10px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.cardimg {
  width: 370px;
  height: 250px;
}
  
  @media (max-width: 768px) {
    width: 100%;
.mainbooks {
  width: 100%;
}
  .bookcard {
  min-width: 160px;
  max-width: 180px;    
  width: 100%;
  height: 100%;
  margin-top: 5px;
  padding: 5px;
}
  .card {
    width: 100%;
  }
.bookcard h2{
  font-size: 10px;
  padding: 5px 0px 5px 0px;
}
.downloadbtn {
  padding: 4px;
  font-size: 10px;
  text-align: center;
}

.abouttext input {
  width: 100%;
  height: 30px;
}
input[type="text"]
{
  color: black;
    font-size:12px;
}
  input::placeholder {
    font-size: 12px;
  }

  .cardimg {
    width: 100%;
    height: 200px;
  }
    .abouttext {
      font-size: 20px;
    }
    .abouttext h2 {
      font-size: 10px;
      display: none;
    }
    .abouttext h1 { 
      font-size: 15px;
    }
  }

`;
