import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { detailsBook } from "../actions/bookActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { BOOK_REVIEW_CREATE_RESET } from "../constants/bookConstants";
import { MdDateRange } from "react-icons/md";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const bookId = props.match.params.id;
  const bookDetails = useSelector((state) => state.bookDetails);
  const { loading, error, book } = bookDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    dispatch(detailsBook(bookId));
  }, [dispatch, bookId]);


  return (
    <Wrapper>
      <div className="w-[90%] m-[auto] center">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="">
            <Link to="/" className="text-[black] text-[20px]">
             Back to Home Page
            </Link>
            <div className="bookscreendiv">
              <div className="mt-[20px] productimgdiv">
                <img
                  className="m-[auto]"
                  src={book.image}
                  alt={book.title}
                ></img>
              </div>
              <div className="bookinfo">
                <div className="p-[20px] booktitle">
                  <h2 className="font-bold text-[30px]">{book.title}</h2>
                  <p>{book.description}</p>
                </div>
                <hr />
                <div className="datasection w-[100%] p-[15px] m-[auto]  flex justify-between">
                  <div className="flex items-center justify-between w-[auto] date">
                    <div>
                      <MdDateRange />
                    </div>
                    <div className="font-bold ">{book.createdAt.slice(0,10)}</div>
                  </div>

                  <div className="applybtn  bg-[#256F98] p-[10px] text-[white]">
                    <div className=" pointer">
                      <a href={book.url}>Download Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  .bookscreendiv {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .productimgdiv {
    width: 100%;
  }
  .productimgdiv img {
    width: 100%;
 height: 100%;
 max-height: 500px;
 background-size: cover;
 object-fit: cover;
  }

  .bookinfo {
    width: 100%;
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    .bookscreendiv {
      flex-direction: column;
    }
    .productimgdiv {
      width: 100%;
      
    }
    .productimgdiv img {
      width: 100%;
      height: 300px;
    }
    .booktitle {
      padding: 0px;
    }
    .booktitle h2{
      padding: 5px;
       font-size: 15px;
    }
    .booktitle p {
      padding: 5px;
      font-size: 11px;
    }
    .bookinfo {
      width: 100%;
      margin-left: 0px;
    }
    .datasection {
      display: flex;
      flex-direction: column;
    }
    .applybtn {
      width: 100%;
      margin-top: 15px;
    }
  }
`;
