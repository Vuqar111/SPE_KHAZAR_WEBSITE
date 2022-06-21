import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ProductListScreen from "./pages/ProductListScreen";
import ProductScreen from "./pages/ProductScreen";
import ProfileScreen from "./pages/ProfileScreen";
import RegisterScreen from "./pages/RegisterScreen";
import SigninScreen from "./pages/SigninScreen";
import ProductsSection from "./pages/ProductsSection";
import ProductEditScreen from "./pages/ProductEditScreen";
import BlogsSection from "./pages/BlogsSection";
import BlogScreen from "./pages/BlogScreen";
import BlogEditScreen from "./pages/BlogEditScreen";
import BlogListScreen from "./pages/BlogListScreen";
import BooksSection from "./pages/BooksSection";
import BookScreen from "./pages/BookScreen";
import BookEditScreen from "./pages/BookEditScreen";
import BookListScreen from "./pages/BookListScreen";
import RecordsSection from "./pages/RecordsSection";
import RecordEditScreen from "./pages/RecordEditScreen";
import RecordListScreen from "./pages/RecordListScreen";
import GalleriesSection from "./pages/GalleriesSection";
import GalleryEditScreen from "./pages/GalleryEditScreen";
import GalleryListScreen from "./pages/GalleryListScreen";
import UserListScreen from "./pages/UserListScreen";
import UserEditScreen from "./pages/UserEditScreen";
import Navbar from "./components/Navbar";
import SubHeader from "./components/SubHeader";
import AdminRoute from "./common/routes/AdminRoute";
import PrivateRoute from "./common/routes/PrivateRoute";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Teams from "./components/Teams";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
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
          <Route path="*" element={<Error />} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
