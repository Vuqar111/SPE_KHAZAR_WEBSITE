import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../common/actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import styled from "styled-components";
export default function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <Wrapper>
      <div className="w-[100%] h-[85vh] flex justify-between mainlogin">
        <div className="w-[100%]   input flex items-center justify-center">
          <form className="form" onSubmit={submitHandler}>
            <div>
              <h1 className="font-bold text-[60px] text-center">Sign In</h1>
            </div>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <div>
              <label className="mt-[15px]" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                required
                className="w-[100%] bg-[#E8F0FE] p-[10px]"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="mt-[15px]" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-[100%] bg-[#E8F0FE] p-[10px]"
                placeholder="Enter password"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label />
              <button
                className="bg-[#000] w-[100%] text-[white] p-[10px] mt-[15px]"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div>
              <label />
              <div className="loginfooter">
                New customer?{" "}
                <Link
                  to={`/register?redirect=${redirect}`}
                  className="text-[blue] font-bold"
                >
                  Create your account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .form {
    width: 40%;
  }
 
 input {
   border:1px solid black;
   outline: none;
 }
   
  @media (max-width: 768px) {
    .form {
      width: 90%;
      margin: auto;
    }
    .mainlogin {
      height: auto;
      flex-direction: column;
    }
    .imgcontent {
      display: none;
    }
    .input {
      width: 100%;
      margin-top: 60px;
    }
    .input h1 {
      font-size: 25px;
    }
    .input input {
      width: 100%;
    }
    .input button {
      width: 100%;
    }
  }
`;
