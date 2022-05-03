import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { detailsBlog } from "../actions/blogActions";
import { BsFillShareFill } from "react-icons/bs";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { BLOG_REVIEW_CREATE_RESET } from "../constants/blogConstants";
import { MdDateRange } from "react-icons/md";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const blogId = props.match.params.id;
  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    dispatch(detailsBlog(blogId));
  }, [dispatch, blogId]);


  const [width, setWidth] = useState(0);
  const url = window.location.href;
  const pagewith = window.innerWidth;
  console.log(url);
  useEffect(() => {
    if (pagewith > 768) {
      setWidth(30);
    } else {
      setWidth(20);
    }
  });
  console.log(width)

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
              <div className="w-[100%] mt-[20px]">
                <img
                  className="w-[100%] h-[100%] max-h-[500px] m-[auto]"
                  src={blog.image}
                  alt={blog.title}
                ></img>
              </div>
              <div className="p-[20px] eventtitle">
                <h2 className="font-bold text-[30px]">{blog.title}</h2>
                <p>{blog.description}</p>
              </div>
              <hr />
              <div className="w-[100%] p-[15px] m-[auto]  flex justify-between datesection ">
                <div className="flex items-center justify-between w-[auto] date">
                  <div>
                    <MdDateRange />
                  </div>
                  <div className="font-bold">{blog.createdAt.slice(0,10)}</div>
            
                </div>

                <div className="flex justify-between  items-center  sharecontainer    text-[white]">
                  <div className="applybtn cursor-pointer  pointer">
                    <FacebookShareButton url={url}>
                      <FacebookIcon size="30px" />
                    </FacebookShareButton>
                  </div>
                  <div className="applybtn cursor-pointer  pointer">
                    <TwitterShareButton url={url}>
                      <TwitterIcon size="30px"  />
                    </TwitterShareButton>
                  </div>
                  <div className="applybtn cursor-pointer  pointer">
                    <WhatsappShareButton url={url}>
                      <WhatsappIcon size="30px" />
                    </WhatsappShareButton>
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
  .sharecontainer {
    width: 10%;
  }
  @media (max-width: 768px) {
    .content {
      margin-top: 10px;
    }
    .center {
      width: 95%;
    }
    .contentsection {
      width: 70%;
    }
    .eventtitle {
      padding: 0px;
    }
    .datesection {
      margin-top: 15px;
      padding: 0px;
    }
    .date {
      font-size: 15px;
      width: 100px;
    }
    .sharecontainer {
      width: 30%;
    }
  }
`;
