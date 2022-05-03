import React from "react";
import styled from "styled-components";
import aboutimg from "../assets/images/speimageabout.jpeg";
const About = () => {
  return (
    <Wrapper>
      <div>
        <div className="imgdiv">
          <img className="img" src={aboutimg} />
          <div className="abouttext">
            <h1>ABOUT US</h1>
          </div>
        </div>

        <div className="w-[80%] m-[auto] p-[20px] bg-[#EBF1F8] contentabout text-[#6798C9] font-bold mt-[50px] rounded-[20px] sm:[bg-[res]]">
          <p>
            SPE has student chapters around the world that provide an operating
            framework for society activities at a university level. SPE Khazar
            University Student Chapter was established on 1st of January in 2
            2005. The mission of the chapter is to provide students with SPE
            membership which gives them access to the technical and
            non-technical knowledge besides will keep them in touch with the
            prestigeous, dynamic community of petroleum professionals worldwide
            and many other benefits.Also the student chapter aims to organize
            free technical and non-technical events to provide ways to the
            students to learn from, interact and network with the industry.
            <br />
            <br />
            <br />
            Our achievements:
            <br />
            <br />
            SPE has Student chapter awards and recognition recognize those that
            succeed in fulfilling SPE’s mission by serving local members. The
            awards honor exemplary efforts in industry engagement, operations
            and planning, community and social outreach, and more. As SPE Khazar
            University Student chapter we have been awarded recently as a reward
            for our quality work. • Gold Standard Chapter 2018 •Student Chapter
            Excellence Award 2021-This prestigious award is the second highest
            honor a student chapter can receive and is awarded to only 20
            percent of student chapters around the world.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
.contentabout {
  width: 95%;
  padding: 10px;
  margin-bottom: 50px;
}
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
    position: absolute;
    font-size: 85px;
    color: white;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    .abouttext {
      font-size: 20px;
    }
  }
`;