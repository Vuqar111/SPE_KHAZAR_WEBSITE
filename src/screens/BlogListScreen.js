import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createBlog, deleteBlog, listBlogs } from "../actions/blogActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  BLOG_CREATE_RESET,
  BLOG_DELETE_RESET,
} from "../constants/blogConstants";

export default function BlogListScreen(props) {
  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  const blogCreate = useSelector((state) => state.blogCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    blog: createdBlog,
  } = blogCreate;

  const blogDelete = useSelector((state) => state.blogDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = blogDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: BLOG_CREATE_RESET });
      props.history.push(`/blog/${createdBlog._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: BLOG_DELETE_RESET });
    }
    dispatch(listBlogs());
  }, [createdBlog, dispatch, props.history, successCreate, successDelete]);

  const deleteHandler = (blog) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteBlog(blog._id));
    }
  };
  const createHandler = () => {
    dispatch(createBlog());
  };

  console.log(blogs);
  return (
    <div>
      <div className="row">
        <h1>Salam Guys</h1>
        <button type="button" className="primary p-[1rem]" onClick={createHandler}>
          Create Blog
        </button>
      </div>

      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>TITLE</th>
                <th>AUTHOR</th>
                <th>CATEGORY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>{blog.title}</td>
                  <td>{blog.author}</td>
                  <td>{blog.category}</td>

                  <td>
                    <button
                      type="button"
                      className="small edit p-[1rem]"
                      onClick={() =>
                        props.history.push(`/blog/${blog._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small delete p-[1rem]"
                      onClick={() => deleteHandler(blog)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
