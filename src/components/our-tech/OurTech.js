import React, {useState} from "react";
import styled from "styled-components";


const MainBox = styled.div`
    width: 80vw;
    height: 80vh;
    background-color: ${(props) => props.theme.gray};

    //임시로
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );

    //정렬


    .my__tech{
        font-family: "NanumSquareBold"; 
        font-weight: bolder;
        font-size: 30px;
        text-align: center;
        margin-top: 3rem;
        justify-content: center;

        margin-bottom: 10vh;
    }

`


//useState로 상태를 세 가지 종류로 만든다 
//  0  > 둘 다 클릭되지 않았을 때
//  1 > 위에 것이 클릭되었을 때
// -1 > 아래 것이 클릭되었을 때
// hover시 백그라운드 컬러 변경 
// 클릭 시 크기 변경 상태로 만든다 


const TabMenu = styled.div`
    width: 75%;
    height: 10rem;
    border-radius: 20px;
    position: relative;
    background-color: ${(props) => props.theme.bgColor};

    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    padding-top: 2rem;

    transition-duration: 0.3s;

    cursor: pointer;

    .imgZone{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .logo {
        width: 100px;
        height: 100px;
    }

    .tech__category{
        display: none;
    }

    .imgZone>img{
        display: none;
        filter: grayscale();
    }

    .imgZone>img:hover{
        /* background-color: blue; */
        filter: none;
    }

    .script{
        display: none;
    }

    &&:hover{
        background-color: lightgray;
        /* background-color: ${(props) => props.theme.black}; */
    }
    
    &.gray{
        /* background-color: ${(props) => props.theme.black}; */
        background-color: lightgray;
        height: 40vh;
        transition-duration: 0.3s;

        .imgZone>img{
            display: block;
            transition-duration: 0.3s;
            filter: none;

            margin-bottom: 8vh;
        }

        .script{
            display: flex;
            padding: 3rem;
            /* padding-top: rem; */

            .title__script{
                font-family: NanumSquareBold;
                font-weight: bolder;
                font-size: 20px;
                margin-right: 2rem;
            }

            .intro__script{
                font-family: NanumSquareBold;
                font-size: 16px;
            }
        }
    }

    &.shrink{
        background-color: ${(props) => props.theme.bgColor};
        height: 3rem;
        transition-duration: 0.3s;
        margin-top: 2rem;

        .imgZone>img{
            display: none;
            transition-duration: 0.3s;  
        }

        padding-top: 1rem;

        .tech__category{
        display: flex;
        font-family: "NanumSquareBold";
        align-items: center;
        justify-content: center;
    }
    }

    &.standard{
        background-color: ${(props) => props.theme.bgColor};
        .imgZone>img{
            display: block;
            transition-duration: 0.3s;
        }
    }
`

const TechZone = () => {
    const [isOpen, setIsOpen] = useState(0);

    // const [color, setColor] = useState("#000000")

    // function hover(){
    //     setColor
    // }

    const OpenTab = (index) => {
        setIsOpen(index)
    }

    return(
        <MainBox>
            <div className="my__tech">My Tech</div>
            <TabMenu onClick = {isOpen === 1 ? () => OpenTab(0) : () => OpenTab(1)} 
                className = {isOpen ===  1 ? "spread gray" :
                                isOpen ===  0 ?  "standard" 
                                    : "shrink"}>
                                        <div className="tech__category">기술 스택</div>
                <div className = "imgZone">
                    <img className="js logo" src={process.env.PUBLIC_URL + 'image/Unofficial_JavaScript_logo_2.svg'}></img>
                    <img className="css logo" src={process.env.PUBLIC_URL + 'image/CSS3_logo_and_wordmark.svg'}></img>
                    <img className="react logo" src={process.env.PUBLIC_URL + 'image/React-icon.svg'}></img>
                </div>
                <div className="script">
                    <div className="title__script">기술 스택</div>
                    <div className="intro__script">ES6 문법으로 이용하여 기초적인 문법을 숙지하였으며 DOM을 익숙하게 다룰 수 있습니다. 
                    React라는 프레임워크를 주로 사용하고 함수형 프로그래밍을 주로 사용합니다.  
                    style component로 필요한 UI를 컴포넌트별로 구현할 수 있습니다. </div>
                </div>
            </TabMenu>
            <TabMenu onClick = {isOpen === -1 ? () => OpenTab(0) : () => OpenTab(-1)} className = {isOpen ===  -1 ? "spread gray" :
                isOpen ===  0 ?  "standard" : "shrink"}>
                <div className="tech__category">협업 스택</div>
                <div className="imgZone">
                    <img className="js logo" src={process.env.PUBLIC_URL + 'image/Figma-logo.svg'}></img>
                    <img className="css logo" src={process.env.PUBLIC_URL + 'image/Git-logo.svg'}></img>
                    <img className="react logo" src={process.env.PUBLIC_URL + 'image/jira-1.svg'}></img> 
                </div>
                <div className="script">
                    <div className="title__script">협업 스택</div>
                    <div className="intro__script">git flow방식으로 팀원들과 협업을 진행할 수 있으며, 
                    figma로 사용자들에게 익숙한 ux및 전체적인 ui에서의 통일성 및 연관성을 논리적으로 생각할 수 있습니다. 
                    jira를 사용하며 본인의 이슈 및 진행상황을 팀원들과 공유할 수 있습니다.  </div>
                </div>
            </TabMenu> 
        </MainBox>
    )
}


function OurTech(){

    return(        
            <TechZone>
            {/* <TechZone>
                <img className="js logo" src={process.env.PUBLIC_URL + 'image/Unofficial_JavaScript_logo_2.svg'}></img>
                <img className="css logo" src={process.env.PUBLIC_URL + 'image/CSS3_logo_and_wordmark.svg'}></img>
                <img className="react logo" src={process.env.PUBLIC_URL + 'image/React-icon.svg'}></img>
            </TechZone>
            <TechZone>             
                <img className="js logo" src={process.env.PUBLIC_URL + 'image/Unofficial_JavaScript_logo_2.svg'}></img>
                <img className="css logo" src={process.env.PUBLIC_URL + 'image/CSS3_logo_and_wordmark.svg'}></img>
                <img className="react logo" src={process.env.PUBLIC_URL + 'image/React-icon.svg'}></img>
            </TechZone> */}
            </TechZone>

    )
} 

export default OurTech;