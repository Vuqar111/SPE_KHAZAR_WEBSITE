import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Product(props) {
  const { product } = props;
  return (
    <Wrapper>
      <div key={product.id} className="card">
        <Link to={`/product/${product._id}`}>
          <img className="medium" src={product.image} alt={product.name} />
        </Link>
        <div className="card-body">
          <Link to={`/product/${product._id}`}>
            <h2 className="font-bold text-[25px]">{product.name}</h2>
          </Link>
          <div className="text-[15px]">{product.description}...</div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .card {
    width: 370px;
    height: auto;
    margin-top: 20px;
    margin: 20px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  img {
    width: 370px;
    height: 270px;
  }
  @media (max-width: 768px) {
    .card {
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
