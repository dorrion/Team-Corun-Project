import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import Switch from "./Switch";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  margin-left: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const slideLeft = keyframes`
    from {
        transform: translateX(-40%);
    }
    to {
        transform: translateX(0%);
    }
`;

const slideRight = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-40%);
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(500px);
    }
    to {
        transform: translateY(0px);
    }
`;

const InfoCotainer = styled.div`
  margin-left: 40px;
  transition: all 0.5s ease-in-out;
  z-index: -1;

  /* 정확히는 infoContainer가 사라지고 그 위에 정보창이 떠야하는데 Z-index쓰면 되나  */
  &.strength {
    animation-duration: 0.35s;
    animation-timing-function: ease-in-out;
    animation-name: ${slideRight};
    animation-fill-mode: forwards; /* 애니메이션 완료 후 마지막 keyframe 상태 유지 */
  }

  &.role {
    animation-duration: 0.35s;
    animation-timing-function: ease-in-out;
    animation-name: ${slideLeft};
    animation-fill-mode: forwards; /* 애니메이션 완료 후 마지막 keyframe 상태 유지 */
  }
`;

const NameArea = styled.div`
  display: flex;

  align-items: center;

  & > a {
    display: flex;
    text-decoration: none;
    color: ${(props) => props.theme.black};

    margin-left: 10px;

    justify-content: center;
    align-items: center;

    width: 100px;
    height: 36px;

    border: none;
    border-radius: 25px;
    background-color: ${(props) => props.theme.gray};

    &:hover {
      transition: 0.5s;
      background-color: ${(props) => props.theme.bgColor};
    }
  }
`;

const Description = styled.div`
  /* 개행 문자(\n) 인식 */
  white-space: pre-wrap;
`;

const InfoArea = (member) => {
  const [state, setState] = useState(false);

  const handleChangeState = () => {
    setState(!state);
  };

  return (
    <ProfileContainer key={member.id}>
      <Switch
        state={state}
        profile={member.profile}
        parentCallback={handleChangeState}
      />
      <InfoCotainer className={state ? "strength" : "role"}>
        <NameArea>
          <h1>{member.name}</h1>
          {/* 언제부터 또 연동이 안됐지 */}
          <a target="_blank" href={member.github}>
            Github
          </a>
          <a target="_blank" href={member.blog}>
            Blog
          </a>
        </NameArea>
        <h2>Front Developer</h2>
        <Description>{state ? member.role : member.strength}</Description>
      </InfoCotainer>
    </ProfileContainer>
  );
};

export default InfoArea;
