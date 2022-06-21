import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { detailsUser, updateUserProfile } from "../common/actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { universities, faculties } from "../common/data/universitiesData";
import { USER_UPDATE_PROFILE_RESET } from "../common/constants/userConstants";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      setUniversity(user.university);
      setFaculty(user.faculty);
    }
  }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      alert("Password and Confirm Password Are Not Matched");
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          email,
          university,
          faculty,
          password,
        })
      );
    }
  };



  return (
    <Wrapper>
      <div className="w-[90%] flex flex-wrap justify-between items-center m-[auto]  mainuser">
        <div className="userformdiv">
          <form className="userform" onSubmit={submitHandler}>
            <div>
              <h1>User Profile</h1>
            </div>
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
                {loadingUpdate && <LoadingBox></LoadingBox>}
                {errorUpdate && (
                  <MessageBox variant="danger">{errorUpdate}</MessageBox>
                )}
                {successUpdate && (
                  <MessageBox variant="success">
                    Profile Updated Successfully
                  </MessageBox>
                )}
                <div className="editprofile">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-[100%] bg-[#E8F0FE] p-[10px] "
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-[100%] bg-[#E8F0FE] p-[10px] "
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                  <div className="mt-[10px]">
                    <label className="mt-[15px]" htmlFor="university">
                      University
                    </label>
                    <select
                      type="text"
                      id="university"
                      className="w-[100%] bg-[#E8F0FE] text-[black] p-[10px] "
                      placeholder="Enter University"
                      value={university}
                      required
                      onChange={(e) => setUniversity(e.target.value)}
                    >
                      {universities.map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </select>
                  </div>
                  <div className="mt-[10px]">
                    <label className="mt-[15px]" htmlFor="faculty">
                      Faculty
                    </label>
                    <select
                      type="text"
                      id="faculty"
                      className="w-[100%] bg-[#E8F0FE] text-[black] p-[10px] "
                      placeholder="Enter Faculty"
                      required
                      value={faculty}
                      onChange={(e) => setFaculty(e.target.value)}
                    >
                      {faculties.map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      className="w-[100%] bg-[#E8F0FE] p-[10px] "
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      id="confirmPassword"
                      type="password"
                      className="w-[100%] bg-[#E8F0FE] p-[10px] "
                      placeholder="Enter confirm password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <button className="primary p-[10px]"  type="submit">
                      Update
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  background: #f3f0f0;

  .userformdiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .userform {
    width: 100%;
    padding: 10px;
  }

  .userform button {
    width: 100%;
  }
  .editprofile {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
  .editprofile div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
  .editprofile div label {
    width: 30%;
  }
  .userform h1 {
    font-size: 25px;
    font-weight: bold;
  }

  .userform div {
    min-width: 300px;
    margin-top: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    background: #f3f0f0;
    .mainuser {
      width: 100%;
     
    }
  
    .mainuser select,
    input {
      width: 100%;
      padding: 5px;
    }
    .userformdiv {
      width: 100%;
      padding: 0px;
      margin: 0px;
    }
    .userform div {
      width: 100%;
    min-width: 200px;
    margin-top: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
   
  }
  .userform div label {
    width: 10%;
  }
    .editprofile div label {
      width: 100%;
      text-align: left;  
    }
    .editprofile {
      display: flex;
      flex-direction: column;
      width: 30%;
      margin: auto;
      padding: 0;
     
    }
    .editprofile div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      text-align: left;
    }
  }
`;
