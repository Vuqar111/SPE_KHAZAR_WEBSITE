import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";

export default function Product(props) {
  const { blog } = props;
  return (
    <Wrapper>
      <div key={blog._id} className="card">
        <Link to={`/blog/${blog._id}`}>
          <img className="medium" src={blog.image} alt={blog.title} />
        </Link>
        <div className="card-body">
          <Link to={`/blog/${blog._id}`}>
            <h2 className="mt-[5px] font-bold text-[15px]">{blog.title}</h2>
          </Link>
          <div className="flex justify-between items-center w-[100%]">
            <div>
              <BsPersonFill />
            </div>
            <div>{blog.author}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
.card {
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 10px;
}
img {
  width: 100%;
  height: 270px;
  background-size: cover;
  object-fit: cover;
}
@media (max-width: 768px) {
  .card {
    min-width: 300px;
    width: 100%;
    padding: 0px;
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
