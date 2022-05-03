import React, { useEffect } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../actions/blogActions";
import Blog from "../components/Blog";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  console.log(blogs);

  return (
    <div>
      <div className="flex justify-center items-center bg-[#C4C4C4] text-center text-5xl font-bold p-[10px]">
        <p className="text-center">Blogs</p>
      </div>
      <div className="w-[90%] m-[auto] flex justify-between mt-[20px] events">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="flex justify-between flex-wrap">
            {blogs.map((blog) => (
              <Blog key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
