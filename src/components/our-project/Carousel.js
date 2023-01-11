import React, { useRef } from "react";
import styled from "styled-components";

import { Slide } from "./Slide";

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .slide {
    height: 650px;
    width: 1220px;
    box-shadow: 7px 12px 20px -1px ${(props) => props.theme.projectTitleGray};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > .display {
      width: 100%;
      height: 100%;
      overflow: hidden;

      > .slider {
        width: 100%;
        height: 100%;
        display: flex;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        transform: translateX(0px);
        transition: 1s ease;
      }
    }
  }

  > .carousel-btn {
    width: 100%;
    margin: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > .btn {
      border-radius: 50px;
      background-color: ${(props) => props.theme.projectTitleGray};
      width: 13px;
      height: 13px;
      margin-left: 10px;
      transition: 0.3s ease;

      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.gray};
      }
    }

    > img {
      width: 12px;
      height: 12px;
      margin-left: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const CarouselComponent = ({ id, title, date, page, movelink, picture }) => {
  const slideRef = useRef(null);

  const handleCarouselBtn = (dataId, key) => {
    if (key + 1 !== picture.length) {
      slideRef.current.style.transform = `translateX(${-(key - 1) * 1220}px)`;
    }
  };

  return (
    <div key={id}>
      <h2>{title}</h2>
      <p className="date">{date}</p>

      <a href={page}>
        <div className="btn-box">
          <button className="btn">
            <img src="/icons/click.png" className="btn-icon"></img>
            <p>{movelink}</p>
          </button>
        </div>
      </a>
      <Carousel>
        <div className="slide">
          <div className="display">
            <div className="slider" ref={slideRef}>
              <Slide content={picture} />
            </div>
          </div>
        </div>
        <div className="carousel-btn">
          {picture.map((d) => {
            return (
              <div
                className="btn"
                key={d.id}
                onClick={(e) => {
                  handleCarouselBtn(id, d.id);
                }}
              ></div>
            );
          })}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;