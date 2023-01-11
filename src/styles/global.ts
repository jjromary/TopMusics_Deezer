import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background-color: ${(props) => props.theme["gray900"]};
        color: ${(props) => props.theme["gray300"]};
        -webkit-font-smoothing: antialiased;
        overflow: hidden;
    }

    body, input, text-area, button {
        font: 400 1rem Poppins, sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
