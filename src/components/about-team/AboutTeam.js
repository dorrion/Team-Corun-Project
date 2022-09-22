import styled from "styled-components";


const Inner = styled.div`
    width : 300px;
    height : 100px;
    background-color : ${(props) => props.theme.black};
`


const AboutTeam = () => {
    return (
        <Inner>
            <div>안녕하세요</div>
        </Inner>
    ) 
}

export default AboutTeam;