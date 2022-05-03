import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("mlezozlr");
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center mt-[150px]">
        <h1 className="text-[30px]">Thanks for joining!</h1>
        <p className="text-[20px]">We will answer your message as quickly</p>
        <Link to="/" className="mt-[10px] text-[blue]">Back to Home PAGE</Link>
      </div>
    );
  }
  return (
    <Wrapper>
      <div className=" w-[100%] h-[85vh] flex justify-between maincontact">
        <div className=" w-[50%] imgcontent">
          <img
            className="w-[100%] h-[100%]"
            src="https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="register"
          />
          <h2 className="absolute">Contact with us</h2>
        </div>
        <div className="w-[70%]  flex items-center justify-center formcontent">
          <form
            className="w-[100%] flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
          >
            <h1 className="font-bold text-[60px] text-center">Get in Touch</h1>
            <p className="text-center">
              Have an inquiry or some feedback for us? Fill put the form below
              to contact our team.
            </p>

            <div className="w-[50%]  flex flex-col">
              <label className="font-semibold mt-[20px] ">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Please enter fullname"
                className="w-[100%] bg-[#E8F0FE] p-[10px] "
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                required
              />
            </div>

            <div className="w-[50%]  flex flex-col">
              <label className="font-semibold mt-[20px] ">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Please enter email"
                className="w-[100%] bg-[#E8F0FE] p-[10px] "
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="w-[50%]  flex flex-col">
              <label className="font-semibold mt-[20px] ">Message</label>
              <textarea
                name="message"
                id="message"
                type="text"
                placeholder="Please enter message"
                className="w-[100%] bg-[#E8F0FE] p-[10px] text-[black]"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div className="bg-[#000] w-[50%] text-[white] p-[10px] mt-[15px]">
              <button
                type="submit"
                className="w-[100%]"
                disabled={state.submitting}
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  margin-bottom: 50px;

  .imgcontent {
    position: relative;
  }
  .imgcontent h2 {
    position: absolute;
    font-size: 40px;
    color: white;
    top: 30%;
    left: 10%;
  }
  @media (max-width: 768px) {
    .maincontact {
      width: 100%;
      flex-direction: column;
      height: 100%;
    }

    form div {
      width: 90%;
    }
    form input {
      width: 100%;
    }
    .imgcontent {
      position: relative;
      width: 100%;
    }
    .imgcontent h2 {
      text-align: center;
      position: absolute;
      font-size: 40px;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      color: white;
      font-weight: bold;
    }
    .inputs {
      width: 100%;
    }
    .inputs input {
      width: 100%;
    }
    .formcontent {
      width: 100%;
      padding-bottom: 15px;
      margin-top: 30px;
    }
    .formcontent input,
    button,
    textarea {
      width: 100%;
      color: black;
    }
    .formcontent h1 {
      font-size: 25px;
    }
  }
`;
