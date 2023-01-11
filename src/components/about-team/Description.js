import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const Container = styled.div`
    width : 100vw;
    height : 100vh;

    background-color : ${(props) => props.theme.bgColor};

    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;


    h1 {
        font-family : 'NanumGothic';
        font-weight : 700;
        font-size : 50px;
        margin-bottom : 20px;
    }

    h3 {
        font-family : 'NanumGothic';
        font-weight : 700;
        font-size : 25px;
        margin-bottom : 30px;

        color : ${(props) => props.theme.blue};
        
    }

    .icon-trophy {
        font-size : 70px;
        margin-bottom : 30px;

    }

    p {
        font-family : 'NanumGothic';
        font-weight : 400;
        font-size : 18px;
        margin-bottom : 20px;
    }


    .footer {
        display : flex;
        flex-direction : row;
        justify-content : center;
        align-items : center;

        margin-top : 100px;

        width : 100%;
    }

    .moreInformation {
        display : flex;
        flex-direction : row;
        justify-content : center;
        align-items : center;

        border : 3px solid ${(props) => props.theme.blue};
        border-radius : 30px;

        width : 300px;
        height : 35px;
        background-color : white;


        font-family : 'NanumGothic';
        font-weight : 700;
        color : ${(props) => props.theme.projectTitleGray};

        &:hover {
            cursor: pointer;
        }
    }


    .icon-area {
        margin-right : 10px;
        > img {
            width : 20px;
            filter : opacity(0.5) drop-shadow(0 0 0 ${(props) => props.theme.blue});
        }
    }

`



const titleAnimation={
    offscreen:{y:-100, opacity:0},
    onscreen:{y:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1,
    delay : 0.5}
 }
}

const subTitleAnimation={
    offscreen:{x:-100, opacity:0},
    onscreen:{x:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1,
    delay : 0.8}
 }
}


const descriptionAnimation={
    offscreen:{opacity:0},
    onscreen:{
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:2,
    delay : 1.5}
 }
}


const iconAnimation={
    offscreen:{opacity:0},
    onscreen:{
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:2,
    delay : 0.3}
 }
}

const linkAnimation={
    offscreen:{y:100, opacity:0},
    onscreen:{y:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1,
    delay : 1.7}
 }
}

const Description = () => {
    return (
        <Container>
            <motion.h1
                variants={titleAnimation}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once:true, amount : 0.1 }}
                transition={{staggerChildren:0.5}}
            >"Co - Run"</motion.h1

            >
            <motion.h3
                variants={subTitleAnimation}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once:true, amount : 0.1 }}
                transition={{staggerChildren:0.5}}
            >Code + Run</motion.h3>

            <motion.div className="icon-trophy"
                variants={iconAnimation}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once:true, amount : 0.1 }}
                transition={{staggerChildren:0.5}}
            >🏆</motion.div>

            <motion.p
                variants={descriptionAnimation}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once:true, amount : 0.1 }}
                transition={{staggerChildren:0.5}}
            >Corun팀은 코드만을 적는 개발자가 아닌</motion.p>
            <motion.p
                variants={descriptionAnimation}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once:true, amount : 0.1 }}
                transition={{staggerChildren:0.5}}
            >스스로 생각하고 성장하는 개발자가 되기위해</motion.p>
            <motion.p
                variants={descriptionAnimation}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once:true, amount : 0.1 }}
                transition={{staggerChildren:0.5}}
            >다양한 프로젝트를 시도하며 끊임없이 달려나가는 프론트엔드 팀입니다.</motion.p>
    


            <div className="footer">
                <Link to = '/ourProject' style={{textDecoration : 'none'}}>
                    <motion.div className="moreInformation"
                        variants={linkAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once:true, amount : 0 }}
                        whileHover={{ scale : 1.1 }}
                        whileTap={{ scale : 1 }}
                        transition={{ type: 'spring', stiffness: 120}}
                    >
                        <span className="icon-area">
                            <img src={`${process.env.PUBLIC_URL}/icons/click.png`}></img>
                        </span>
                        
                        <span className="icon-text">Corun의 프로젝트 보러가기</span>
                    </motion.div>
                </Link>
            </div>
        </Container>
    )

}

export default Description;