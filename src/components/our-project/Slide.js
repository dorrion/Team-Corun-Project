import styled from "styled-components";

const Content = styled.div`
    width : 100%;
    height : 100%;
    
`

export const Slide = ( {content} ) => {
    return content.map((data) => {
        return (
            <Content key={data.id}>
                <a href={data.pageLink}>
                    <img src={data.src}></img>
                    <span className="name">{data.name}</span>
                </a>
            </Content>
        )
    })
}