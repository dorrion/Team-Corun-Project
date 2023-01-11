// 한 번 한 페이지에 다 담아보겠습니다.
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import memberList from "../../data/members.json";

import InfoArea from "./InfoArea";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  padding: 50px;
`;

const AboutMembers = () => {
  let [members, setMembers] = useState(memberList);

  return (
    <Container>
      <h1>CoRun의 구성원을 소개합니다</h1>
      {members.map((member) => (
        <InfoArea 
        key = {member.id}
        name = {member.name}
        profile={member.profile}
        strength={member.strength}
        role={member.role}
        github={member.github}
        blog={member.blog}/>
      ))}
      ;
    </Container>
  );
};

export default AboutMembers;
