import { createGlobalStyle } from "styled-components";

//creating style for whole app

const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
}

h1,h2,h3,h4,h5,h6{
    display:inline-block;
}

body{
    margin:0;
    padding:0;
    overfllow-x:hidden;
    font-family:'Source Sans Pro', sans-serif;
}
`
export default GlobalStyle;