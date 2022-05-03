import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { signout } from "./actions/userActions";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
import ProductsSection from "./screens/ProductsSection";
import ProductEditScreen from "./screens/ProductEditScreen";
import BlogsSection from "./screens/BlogsSection";
import BlogScreen from "./screens/BlogScreen";
import BlogEditScreen from "./screens/BlogEditScreen";
import BlogListScreen from "./screens/BlogListScreen";
import BooksSection from "./screens/BooksSection";
import BookScreen from "./screens/BookScreen";
import BookEditScreen from "./screens/BookEditScreen";
import BookListScreen from "./screens/BookListScreen";
import RecordsSection from "./screens/RecordsSection";
import RecordEditScreen from "./screens/RecordEditScreen";
import RecordListScreen from "./screens/RecordListScreen";
import GalleriesSection from "./screens/GalleriesSection";
import GalleryEditScreen from "./screens/GalleryEditScreen";
import GalleryListScreen from "./screens/GalleryListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import SubHeader from "./components/SubHeader";
import About from "./components/About";
import Error from "./components/Error";
import Testimontials from "./components/Testimontials";
import Contact from "./components/Contact";
import FAQ from './components/FAQ';
import Teams from './components/Teams';
function App() {
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
    <BrowserRouter>
      <div>
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
        <SubHeader />
        <main>
      
          <Route path="/products" component={ProductsSection} exact></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>

          {/* Blog */}

          <Route path="/blogs" component={BlogsSection} exact></Route>
          <Route path="/blog/:id" component={BlogScreen} exact></Route>

          <Route path="/blog/:id/edit" component={BlogEditScreen} exact></Route>

          {/* Record Routers */}
          <Route path="/records" component={RecordsSection} exact></Route>
          <Route
            path="/record/:id/edit"
            component={RecordEditScreen}
            exact
          ></Route>

          {/* Books */}

          <Route path="/books" component={BooksSection} exact></Route>
          <Route path="/book/:id" component={BookScreen} exact></Route>

          <Route path="/book/:id/edit" component={BookEditScreen} exact></Route>

          {/* Gallery */}
          <Route path="/galleries" component={GalleriesSection} exact></Route>
          <Route
            path="/gallery/:id/edit"
            component={GalleryEditScreen}
            exact
          ></Route>

          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>

          <Route path="/about" component={About} exact></Route>
          <Route path="/faq" component={FAQ} exact></Route>
          
          <Route path="/contact" component={Contact} exact></Route>
          <Route path="/teams" component={Teams} exact></Route>

          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>

          <AdminRoute path="/bloglist" component={BlogListScreen}></AdminRoute>

          <AdminRoute
            path="/gallerylist"
            component={GalleryListScreen}
          ></AdminRoute>

          <AdminRoute path="/booklist" component={BookListScreen}></AdminRoute>

          <AdminRoute
            path="/recordlist"
            component={RecordListScreen}
          ></AdminRoute>

          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path='*' element={<Error/>} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
