import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#256F98] flex w-[100%]  text-[white] mt-[50px] ">
      <div className="flex justify-between m-[auto]  w-[80%] mt-[20px] mb-[30px] footer">
        <div className="font-bold text-[35px]">SPE-KHAZAR</div>
        <div>
          <div className="font-bold text-[16px] mt-[10px]">Resources</div>
          <div className="footerul">
            <li>
              <Link to="/products">Events</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/records">Records</Link>
            </li>
            <li>
              <Link to="/records">Library</Link>
            </li>
            <li>
              <Link to="/galleries">Gallery</Link>
            </li>
            <li>
              <Link to="/teams">Team</Link>
            </li>
          </div>
        </div>

        <div>
          <div className="font-bold text-[16px] mt-[10px]">Help</div>
          <div className="footerul">
            <li>
              <a href="mailto:vuqqa252@gmail.com">Contact Us</a>
            </li>
            <Link to="/faq">
              <li>FAQ</li>
            </Link>
          </div>
        </div>

        <div>
          <div className="font-bold text-[16px] mt-[10px]">Social Media</div>
          <div className="footerul">
            <li>
              <a href="https://tr-tr.facebook.com/">
              FaceBook
                </a></li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Youtube</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
