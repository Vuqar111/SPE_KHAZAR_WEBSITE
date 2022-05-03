import React, { useEffect } from "react";
import styled from "styled-components";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import { listProducts } from "../actions/productActions";
import { listBooks } from "../actions/bookActions";
import { listBlogs } from "../actions/blogActions";
import { listGalleries } from "../actions/galleryActions";
import { listRecords } from "../actions/recordActions";

import { AiOutlineUser } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import {
  BsImage,
  BsCalendar2EventFill,
  BsFillRecordBtnFill,
  BsBookshelf,
} from "react-icons/bs";

const DashboardScreen = () => {
  const userList = useSelector((state) => state.userList);
  const { users } = userList;
  // Events Section
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const bookList = useSelector((state) => state.bookList);
  const { books } = bookList;
  const blogList = useSelector((state) => state.blogList);
  const { blogs } = blogList;

  const recordList = useSelector((state) => state.recordList);
  const { records } = recordList;
  const galleryList = useSelector((state) => state.galleryList);
  const { galleries } = galleryList;
  useEffect(() => {
    dispatch(listProducts());
    dispatch(listBooks());
    dispatch(listBlogs());
    dispatch(listGalleries());
    dispatch(listRecords());
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="text-[30px] dastitle">Your DashBoard</div>
      <div className="dashboxes">
        <div className="dasbox">
          <div className="icon">
            <AiOutlineUser />
          </div>

          <p>Total Users</p>
          <h4>1,000</h4>
        </div>
        <div className="dasbox">
          <div className="icon">
            <BsCalendar2EventFill />
          </div>

          <p>Total Events</p>
          <h4>1,000</h4>
        </div>
        <div className="dasbox">
          <div className="icon">
            <FaBlogger />
          </div>

          <p>Total Blogs</p>
          <h4>1,000</h4>
        </div>
        <div className="dasbox">
          <div className="icon">
            <BsBookshelf />
          </div>

          <p>Total Books</p>
          <h4>1,000</h4>
        </div>
        <div className="dasbox">
          <div className="icon">
            <BsFillRecordBtnFill />
          </div>

          <p>Total Records</p>
          <h4>1,000</h4>
        </div>
        <div className="dasbox">
          <div className="icon">
            <BsImage />
          </div>

          <p>Total Gallery Images</p>
          <h4>1,000</h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default DashboardScreen;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  .dashboxes {
    width: 60%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .dasbox {
    width: 250px;
    height: 200px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    margin: 10px;
    color: black;
    padding: 10px;
  }
  .dasbox p {
    margin-top: 10px;
  }
  .dasbox h4 {
    font-size: 25px;
    font-weight: bold;
  }
  .dasbox:hover {
    background: black;
    color: white;
  }
  .icon {
    width: 70px;
    height: 70px;
    border-radius: 5px;
    background: grey;
    color: white;
    padding: 10px;
    font-size: 45px;
  }
  .dasbox:hover .icon {
    background: blue;
  }

  @media (max-width: 768px) {
    width: 90%;
  margin: auto;
  .dastitle {
    font-size: 20px;
    
  }
  .dashboxes {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .dasbox {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    margin: 10px;
    color: black;
    padding: 10px;
  }
  .dasbox p {
    margin-top: 10px;
  }
  .dasbox h4 {
    font-size: 25px;
    font-weight: bold;
  }
  .dasbox:hover {
    background: black;
    color: white;
  }
  .icon {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background: grey;
    color: white;
    padding: 10px;
    font-size: 20px;
  }
  .dasbox:hover .icon {
    background: blue;
  }

  }
`;
