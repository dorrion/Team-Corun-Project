import React, { useState, useEffect } from "react";
import styled from "styled-components";

import projectDummy from "../../data/project-dummy.json";
import CarouselComponent from "./Carousel";


const OurProjectArea = styled.div`
  width: 100vw;
  /* height: 100vw; */
  display: flex;
  flex-flow: column;
  font-family: "NanumGothic";
  background-color: ${(props) => props.theme.bgColor};
`;

const TitleBox = styled.div`
  width: 100vw;
  display: flex;
  padding: 150px 0 150px 0;
  justify-content: center;
  h1 {
    font-size: 3em;
    font-weight: 700;
  }
`;

const ProjectInfo = styled.div`

  width: 100vw;
  text-align: center;
  .project-info-title {
    display: flex;
    flex-flow: column;
  }
  h2 {
    color: ${(props) => props.theme.projectTitleGray};
    font-weight: 700;

    margin-top: 30px;
  }
  .date {
    font-weight: 700;
    color: ${(props) => props.theme.projectDateGray};
    margin: 15px;
  }

  .btn-box {
    display: flex;
    flex-flow: column;
    align-items: center;

    margin-bottom: 20px;
  }
  .btn {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-style: none;
    font-weight: 700;
    margin-top: 15px;
    cursor: pointer;
    background-color: ${(props) => props.theme.bgColor};
    transition: 0.3s;
    border-width: 0px 0px 2px 0px;
    border-style: solid;
  }
  .btn:hover {
    color: ${(props) => props.theme.gray};
    transition: 0.3s;
  }
  .btn > img {
    width: 20px;
    margin-right: 5px;
  }

  a {
    text-decoration: none;
  }
`;

const OurProject = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(projectDummy.project);
  }, []);

  return (
    <OurProjectArea>
      <TitleBox>
        <h1>Corun's Project</h1>
      </TitleBox>
      <ProjectInfo>
        <div className="project-info-title">
          {data.map((el) => (
            <CarouselComponent key={el.id} {...el} />
          ))}
        </div>
      </ProjectInfo>
    </OurProjectArea>
  );
};


export default OurProject;