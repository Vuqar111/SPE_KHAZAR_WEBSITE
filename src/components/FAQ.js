import React,{useState} from "react";
import aboutimg from "../assets/images/aboutimg.jpg";
import styled from "styled-components";
const FAQ = () => {


    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if(selected=== i) {
            return setSelected(null)
        }
        setSelected(i)
    } 
  const questions = [
    {
      question: "How can I become an SPE Khazar University Student Chapter officer?",
      answer:
        "For becoming an officer at SPE Khazar University Student Chapter you need to apply during recruitment. If you pass the interview stage you can become an officer. Only students of Khazar Univerity can become an officer at SPE Khazar University Studnet Chapter.",
    },
    {
      question: "Are events SPE Khazar University Student  Chapter eligible to only students of Khazar University?",
      answer:
        "No. Usually, students from all universities can participate in our events",
    },
    {
      question: "Are events SPE Khazar University Student  Chapter eligible to only students of Khazar University?",
      answer:
        "No. Usually, students from all universities can participate in our events",
    },
    {
        question: "Are events of the SPE Khazar University Student Chapter free?",
        answer:
          "Yes. All events that we are organizing are completely free.",
      },
  ];
  return (
    <Wrapper>
    <div className="wrapper">
        <div className="imgdiv">
          <img className="img" src={aboutimg} />
          <div className="abouttext">
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
          </div>
        </div>
        <div className="mt-[20px] text-center font-bold text-[30px]">FAQ</div>
      <div className="accordion ">
        {questions.map((item, i) => {
          return (
            <div className="item ">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected  === i ? '-' : '+'}</span>
              </div>
              <div className={selected  === i ? 'content-show' : 'content'}>{item.answer}</div>
            </div>
          );
        })}
      </div>
    </div>
    </Wrapper>
  );
};

export default FAQ;

const Wrapper = styled.div`
 
 .imgdiv {
    position: relative;
  }
  img {
    width: 100%;
    max-height: 500px;
    height: 100%;
    object-fit: cover;
  }
  .abouttext {
    text-align: center;
    position: absolute;
    font-size: 55px;
    color: white;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    .accordion {
      width: 90%;
    }
    .abouttext {
      font-size: 20px;
    }
  }
`