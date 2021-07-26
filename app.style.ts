import styled from "styled-components";

interface Icontainer {
    readonly backgroundColor?: string
    readonly borderColor?: string
}

interface Itext {
    readonly textColor?: string;
}

interface Idot {
    readonly dotColor?: string
}

const Box = {
    Container: styled.div<Icontainer>`
    position:relative;
    display:inline-block;
    background-color:${(props) => props.backgroundColor !== 'undefined' ? props.backgroundColor : "transparent"};
    padding:4px;
    width:150px;
    border-style:dashed;
    border-color:${(props) => props.borderColor !== 'undefined' ? props.borderColor : "#ddd"};;
    border-width:1px;
    `,
    DotOne: styled.div<Idot>`
    top:0;
    left:0;
    transform:translate(-50%,-50%);
    position: absolute;
    background-color:${(props) => props.dotColor !== 'undefined' ? props.dotColor : "#ddd"};
    width: 4px;
    height: 4px;
    border-radius: 50%;
    `,
    DotTwo: styled.div<Idot>`
    top:0;
    right:0;
    transform:translate(50%,-50%);
    position: absolute;
    background-color:${(props) => props.dotColor !== 'undefined' ? props.dotColor : "#ddd"};
    width: 4px;
    height: 4px;
    border-radius: 50%;
    `,
    DotThree: styled.div<Idot>`
    top:100%;
    left:0;
    transform:translate(-50%,-50%);
    position: absolute;
    background-color:${(props) => props.dotColor !== 'undefined' ? props.dotColor : "#ddd"};
    width: 4px;
    height: 4px;
    border-radius: 50%;
    `,
    DotFour: styled.div<Idot>`
    top:100%;
    right:0;
    transform:translate(50%,-50%);
    position: absolute;
    background-color:${(props) => props.dotColor !== 'undefined' ? props.dotColor : "#ddd"};
    width: 4px;
    height: 4px;
    border-radius: 50%;
    `
}

const Text = styled.span<Itext>`
color:${(props) => props.textColor !== 'undefined' ? props.textColor : 'inherit'};
display:flex;
justify-content:center;
`
export { Box, Text }