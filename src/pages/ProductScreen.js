import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { detailsProduct, createReview } from "../common/actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PRODUCT_REVIEW_CREATE_RESET } from "../common/constants/productConstants";
import { MdDateRange } from "react-icons/md";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <Wrapper>
      <div className="w-[80%] m-[auto] center">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="">
            <div>
              <div className="mt-[20px] eventimgdiv">
                <img
                  className="blogimage"
                  src={product.image}
                  alt={product.name}
                ></img>
              </div>
              <div className="eventtitle">
                <h2>{product.name}</h2>
                <p className="">
                  {product.description}
                </p>
              </div>
              <hr />
              <div className="w-[100%] p-[15px] m-[auto]  flex justify-between datesection ">
                <div className="flex items-center justify-between w-[auto] date">
                  <div>
                    <MdDateRange />
                  </div>
                  <div className="font-bold ">{product.createdAt.slice(0,10)}</div>
                </div>

                <div className="applybtn">
                  <button>Apply Event</button>
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
  .productname {
    font-size: 45px;
    color: black;
    padding: 0px;
    margin: 0px;
  }

  .productprice {
    font-weight: bold;
    font-size: 40px;
  }
  .blogimage {
    width: 100%;
    max-height: 500px;
    height: 100%;
    background-size: cover;
    object-fit: cover;
  }
  .eventtitle {
    padding: 15px;
  }
  .eventtitle h2 {
    font-size: 30px;
    font-weight: bold;
  }
  .applybtn {
    background: #256F98;
    padding: 10px;
    color: white;
  }
  @media (max-width: 768px) {
    .center {
      width: 95%;
    }
    .productname {
      font-size: 15px;
    }
    .eventtitle {
      padding: 0px;
    }
    .eventtitle h2{
      font-size: 18px;
    }
    .applybtn {
    background: #256F98;
    padding: 0px;
    color: white;
  }
  }
`;
