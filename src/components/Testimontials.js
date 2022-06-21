import React, { useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import styled from "styled-components";
import { people } from "../common/data/testimontialData";

function Testimontials() {
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  // useEffect(() => {
  //   const lastIndex = people.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={`testimontial ${position}`} key={id}>
                <img src={image} alt={name} className="person-img" />
                <div className="testext">
                  <p className="text">{quote}</p>
                  <h4>--{name}</h4>
                </div>
              </article>
            );
          })}
          <button className="pre" onClick={prevSlide}>
            <FiChevronLeft />
          </button>
          <button className="nex" onClick={nextSlide}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </Wrapper>
  );
}

export default Testimontials;

const Wrapper = styled.div`
  /*
=============== 
Variables
===============
*/
margin-top: 30px;
  /* section */
  .section {
    width: 90%;
    height: auto;
    margin: auto;
    padding: 0px;
    background-color: red;
  }

  .testimontial {
    display: flex;
    justify-content: space-between;
  }

  h4 {
    font-size: 22px;
    color: white;
    font-weight: 500;
    padding-top: 30px;
    padding-left: 20px;
  }
  .title span {
    font-size: 0.85em;
    color: var(--clr-primary-5);

    font-weight: 700;
  }
  p {
    font-size: 20px;
    color: white;
    padding-top: 50px;
  }
  .section-center {
    margin: 0 auto;
    width: 100%;
    height: 40vh;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
    background-color: #256f98;
  }
  .person-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
  }

  .pre,
  .nex {
    position: absolute;
    bottom: 1%;
    right: 1%;
    transform: translateY(-50%);
    background: grey;
    color: white;
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 15px;
    border-radius: var(--radius);
    cursor: pointer;
    transition: all 0.3s linear;
  }

  .prev,
  .pre {
    right: 40px;
  }
  .nex {
    right: 0;
  }
  .text {
    padding: 10px;
  }

  @media screen and (max-width: 765px) {
    .section-center {
      margin: 0 auto;
      width: 100%;
      height: 55vh;
      text-align: center;
      position: relative;
      display: flex;
      background-color: #256f98;
    }
    .person-img {
      width: 100%;
      max-height: 50%;
      height: 100%;
      object-fit: cover;
      background-size: cover;
    }

    .section {
      width: 100%;
      height: auto;
    }
    .testimontial {
      flex-direction: column;
    }
    h4 {
      font-size: 22px;
      color: white;
      text-align: left;
      font-weight: 500;
      padding-top: 15px;
      padding-left: 20px;
      margin-top: 0px;  
    }

    p {
      margin-top: -30px;
      font-size: 15px;
      color: white;
      padding-top: 0px;
    }
  }

  @media (min-width: 800px) {
    .text {
      max-width: 45em;
    }
    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
  }
  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }
`;
