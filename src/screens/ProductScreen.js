import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { detailsProduct, createReview } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PRODUCT_REVIEW_CREATE_RESET } from "../constants/productConstants";
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
                  className="m-[auto]"
                  src={product.image}
                  alt={product.name}
                ></img>
              </div>
              <div className="p-[20px] eventtitle">
                <h2 className="font-bold text-[30px]">{product.name}</h2>
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

                <div className="bg-[#256F98] p-[10px] text-[white]">
                  <div className="applybtn  pointer">Apply Event</div>
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

  @media (max-width: 768px) {
    .productname {
      font-size: 15px;
    }
  }
`;
