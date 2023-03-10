import styled from "styled-components";


export const Container = styled.div`
    height: 150px;
    text-align: center;
    background: transparent;
  
`
export const Header = styled.h1`
`

export const Title = styled.div`
    padding-top: 20px;
    paint-order: 10px;
    color:  #ccc;
    font-size: 45px;
    background-color: transparent;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    @media (max-width: 750px){
        backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    font-size: 30px;
    }
`
