import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../common/actions/userActions";
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  useEffect(() => {}, [dispatch]);
  const [showlink, setshowlink] = useState(false);
  return (
    <>
      <div className="navbar">
        <nav>
          <div className="firstnav">
            <Link to="/">
              <div className="font-bold">Spe-Khazar</div>
            </Link>
          </div>
          <div
            className={`${
              showlink
                ? "links-container navmenu show-container"
                : "links-container navmenu"
            }`}
          >
            <div className="submenu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About </Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="icondropdown">
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#">Hi, {userInfo.name}</Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/profile">Profile Settings</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  className="bg-[#256F98] text-[white] rounded-[5px] pl-[20px]  pr-[20px] "
                  to="/signin"
                >
                  Log In
                </Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <div className="dropdown two">
                  <Link to="#admin">Admin</Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/productlist">Events</Link>
                    </li>
                    <li>
                      <Link to="/bloglist">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/userlist">Users</Link>
                    </li>
                    <li>
                      <Link to="/recordlist">Records</Link>
                    </li>
                    <li>
                      <Link to="/booklist">Library</Link>
                    </li>
                    <li>
                      <Link to="/gallerylist">Gallery</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div
            className="icon hamburger"
            onClick={() => setshowlink(!showlink)}
          >
            <GiHamburgerMenu />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
