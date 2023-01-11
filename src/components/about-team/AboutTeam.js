import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
// import click from "./icons/click";


const Container = styled.div`
    width : 100vw;
    height : 100vh;

    background-color : ${(props) => props.theme.bgColor};

    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;


    .icon-bulb{
        font-size : 70px;
        margin-bottom : 20px;
    }

    > h1 {
        margin-bottom : 50px;
    }

    button {
        border-radius : 30px;
        border : 3px solid ${(props) => props.theme.blue};
        width : 300px;
        height : 40px;
        background-color : white;

        font-family : 'NanumGothic';
        font-size : 15px;
        font-weight : 700;
        color : ${(props) => props.theme.blue};


        &:hover {
        cursor: pointer;

    }
    }

    

`

const imageAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
  }

}

const textAnimate1={
    offscreen:{y:-100, opacity:0},
    onscreen:{y:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1,
    delay : 0.5}
 }
}
 const textAnimate2={
    offscreen:{y:-100, opacity:0},
    onscreen:{y:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1,
    delay : 0.9}
 }

}

const AboutTeam = () => {




    return (
        <>
            <Container>
                <motion.div className="icon-bulb"
                    variants={imageAnimate}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once:false, amount:0.5}}
                    transition={{staggerChildren:0.5}}
                >
                    💡
                </motion.div>
                <motion.h1
                    variants={textAnimate1}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                >Corun은 어떤 팀일까요?</motion.h1>
                <Link to ="/description">
                    <motion.button
                        variants={textAnimate2}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        whileHover={{ scale : 1.1 }}
                        whileTap={{ scale : 1 }}
                        transition={{ type: 'spring', stiffness: 120}}
                    >Corun팀에 대해서 알아보기</motion.button>
                </Link>



                {/* <div className="background-element">
                    <h1>?</h1>
                    <div className="question">Corun은 어떤 팀인가요?</div>
                    <h1 className="quote-left">"</h1>
                    <h1 className="quote-right">"</h1>
                </div>
                <div className="content">
                    <div className="context1">저희는 부트캠프를 통해 배운 기술을 기반으로</div>
                    <div className="context2">다양한 프로젝트를 시도하는 프론트엔드 팀입니다.</div>
                </div>

                <div className="footer">
                    <div className="moreInformation">
                        <span className="icon-area">
                            <img src={`${process.env.PUBLIC_URL}/icons/click.png`}></img>
                        </span>
                        
                        <span className="icon-text">Corun의 프로젝트 보러가기</span>
                    </div>
                </div> */}
            </Container>
            {/* <Footer>

            </Footer> */}

        </>
    ) 
}

export default AboutTeam;