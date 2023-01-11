import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";



const MainContainer = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */

  background : ${(props) => props.temp <= 11 ? 'linear-gradient(36deg, rgba(199,230,255,1) 50%, rgba(69,190,252,1) 100%)' : 
                            props.temp <= 21 ? 'linear-gradient(36deg, rgba(206,255,199,1) 50%, rgba(69,252,109,1) 100%);' : 
                            props.temp <= 26 ? 'linear-gradient(36deg, rgba(255,254,199,1) 50%, rgba(252,185,69,1) 100%)' : 'linear-gradient(36deg, rgba(255,216,122,1) 50%, rgba(252,105,69,1) 100%)'};


  

 
  width: 100vw;
  height: 100vh;
`

const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8%;
  font-family: "NanumGothic";

  .greeting{
    display: flex;
    flex-direction: column;
    font-size: 3.5rem;
    font-weight: 800; 

    > span {
      font-size : 30px;
      margin-top : 50px;
    }
  }

  .newline {
    white-space: pre-line;
  }

  .blink {
    animation: blink 1s infinite;
    font-size: 4rem;
  }

  @keyframes blink {
    to {
      opacity: 0;
    }
  }

  @media screen and (max-width: 724px){
      padding: 20% 10%;
      flex-direction: column;
      justify-content: space-evenly;
      
      .greeting {
        font-size: 2.6rem;
      }

      .blink {
        font-size: 3rem;
      }
    }
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 100%; */

  .loginToGoogle{
    padding: 2.5%;
    display: flex;
    justify-content: center;
    margin-bottom: 10%;
  }

  .loginToGithub{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .googleLogoImg{
    width: 3rem;
  }

  .githubLogoImg{
    width: 4.5rem;
  }
`

const LoginBtn = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  border: 1px solid #000;
  border-radius: 4px;
  width: 350px;
  padding: 5%;
  text-align: center;
  box-shadow: 2px 2px 5px gray;

  &:hover {
  box-shadow: 2px 5px 5px gray;
}
`

const Logined = styled.div`
  display: flex;
  position: absolute;
  top: 1rem;
  right: -1rem;
  width: 200px;


  .userName {
    display: flex;
    align-items: center;
  }
  .logoutBtn {
    background-color: ${props => props.theme.gray};
    padding: 0.5rem;
    margin-left: 1rem;
  }
`


const textAnimate1={
  offscreen:{y:-100, opacity:0},
  onscreen:{y:0,
  opacity:1,
  transition: {type:"spring",
  bounce:0.4,
  duration:1,
  delay : 6}
}
}





function Intro() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState('unknown');

  const content = "안녕하세요!\n 저희는 Corun 팀 입니다. ";

  const [temp, setTemp] = useState(0);


  const API_ACCESS_ID = process.env.REACT_APP_WEATHERAPI_ACCESS_ID;
  
  axios(`https://api.openweathermap.org/data/2.5/weather?lat=37.33&lon=126.59&appid=${API_ACCESS_ID}`)
  .then((res)=> {
    // console.log(res.data.main.temp);
    setTemp(res.data.main.temp - 273.15);
  })


  console.log(temp);
  // setTemp(27);



  useEffect(() => {
    const interval = setInterval(() => {
        setText(text + content[count]); // 이전 set한 문자 + 다음 문자
        setCount(count + 1); // 개수 만큼 체크 
    }, 200);
    if(count === content.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
        clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
    }

    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
})

  return (
    <>
      <MainContainer temp = {temp}>
        {/* <Logined>
          <span className='userName'> {userName} </span>
          <div className='logoutBtn'>
            로그아웃
          </div>
        </Logined> */}

        <ContentsContainer>
          <p className='greeting'>
            <div className='newline'>
              {text}
              {count === content.length ? '' : <span className='blink'>|</span>}
            </div>
            {temp <= 11 ? <motion.span variants={textAnimate1} initial={"offscreen"} whileInView={"onscreen"} viewport={{once:true, amount:0.1}}> 오늘 날씨는 매우 춥네요!☃️ </motion.span> : 
             temp <= 21 ? <motion.span variants={textAnimate1} initial={"offscreen"} whileInView={"onscreen"} viewport={{once:true, amount:0.1}}> 오늘 날씨는 시원하군요!🙂</motion.span> : 
             temp <= 26 ? <motion.span variants={textAnimate1} initial={"offscreen"} whileInView={"onscreen"} viewport={{once:true, amount:0.1}}> 오늘 날씨는 따듯하네요!😊</motion.span> : <motion.span variants={textAnimate1} initial={"offscreen"} whileInView={"onscreen"} viewport={{once:true, amount:0.1}}> 오늘 날씨는 매우 덥네요!⛱️ </motion.span>}
          </p>
          <LoginContainer>
            <LoginBtn className='loginToGoogle'>
              <img className='googleLogoImg'src={`${process.env.PUBLIC_URL}/image/googleLogo.png`}></img>
              <span style={{padding: '10px 0'}}>Google계정으로 로그인하기</span>
            </LoginBtn>
            <LoginBtn className='loginToGithub'>
              <img className='githubLogoImg' src={`${process.env.PUBLIC_URL}/image/gitHubLogo.png`}></img>
              <span>Github계정으로 로그인하기</span>
            </LoginBtn>
          </LoginContainer>
        </ContentsContainer>
      </MainContainer>
    </>
  );
}

export default Intro
