import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    ul {
        list-style: none;
        margin: 0;
    }

    .done {
        text-decoration: line-through;
        color: #999;
    }

    .tableActions {
        width: 150px
    }
`;

export default GlobalStyle;
