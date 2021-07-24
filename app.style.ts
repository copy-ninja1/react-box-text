import styled from "styled-components";

const Box = {
    Container: styled.div`
    position:relative;
    display:inline-block;
    background:white;
    padding:4px;
    width:150px;
    border-style:dashed;
    border-color:blue;
    border-width:1px;
    `,
    DotOne: styled.div`
    top:0;
    left:0;
    transform:translate(-50%,-50%);
    position: absolute;
    background: blue;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    `,
    DotTwo: styled.div`
    top:0;
    right:0;
    transform:translate(50%,-50%);
    
    position: absolute;
    background: blue;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    `,
    DotThree: styled.div`
    top:100%;
    left:0;
    transform:translate(-50%,-50%);
    
    position: absolute;
    background: blue;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    `,
    DotFour: styled.div`
    top:100%;
    right:0;
    transform:translate(50%,-50%);
    position: absolute;
    background: blue;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    `
}

const Text = styled.span`
color:blue;
display:flex;
justify-content:center;
`
export { Box, Text }