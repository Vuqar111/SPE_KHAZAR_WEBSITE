import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Subscribe from "../components/Subscribe";
import Blog from "../components/Blog";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../common/actions/productActions";
import { listBlogs } from "../common/actions/blogActions";
import Testimontials from "../components/Testimontials";
import Slider from "../components/HomeSlider/Slider";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const blogList = useSelector((state) => state.blogList);
  const { blogs } = blogList;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listBlogs());
  }, [dispatch]);

  console.log(blogs);
  return (
    <div>
      <div className="h-[auto] flex">
        <Slider />
      </div>
      <div className="w-[90%] m-[auto] mt-[25px] text-[20px] hometitle">Our Latest Events</div>
      <div className="w-[90%] m-[auto] flex justify-between mt-[20px] events">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="recordcontainer">
            {products.slice(0,3).map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
      <Testimontials />
      {/* <div className="w-[90%] m-[auto] mt-[25px] text-[20px] ">Our Latest Blogs</div>
      <div className="w-[90%] m-[auto] flex justify-between mt-[20px] events">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          // <div className="w-[100%] flex justify-between  flex-wrap">
          //   {blogs.map((blog) => (
          //     <Blog key={blog._id} blog={blog} />
          //   ))}
          // </div>
          <p>H</p>
        )}
      </div> */}
      <Subscribe />
    </div>
  );
}
