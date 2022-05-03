import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonFill, BsMinecartLoaded } from "react-icons/bs";
const SubHeader = () => {
  const { showlink, setshowlink } = useState(true);
  return (
    <Wrapper>
  <div>
      <div className="subnavbar bg-[white]">
        <nav>
          <div className="flex w-[35%] mainsubheader font-bold">
            <div className="w-[100%] flex justify-between subheader">
              <div>
                <Link to="/products">Events</Link>
              </div>
              <div>
                <Link to="/blogs">Blogs</Link>
              </div>
              <div>
                <Link to="/records">Records</Link>
              </div>
              <div>
                <Link to="/books">Library</Link>
              </div>
              <div>
                <Link to="/galleries">Gallery</Link>
              </div>
              <div>
                <Link to="/teams">Team</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    </Wrapper>
  );
};

export default SubHeader;


const Wrapper = styled.div`


@media (max-width: 768px) {
  .mainsubheader {
    width: 100%;
    font-size: 10px;
  }
}

`