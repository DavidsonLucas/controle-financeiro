import { createGlobalStyle } from "styled-components";
import ImgBackground from './asset/gifBackground.gif'

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body{
        font-family: 'Poppins', sans-serif;
        background-color: #f2f2f2;
        background-image:url(${ImgBackground});
    }
`

export default Global