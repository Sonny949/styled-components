import styled, {css} from "styled-components";

const Button = styled.button`
    display: block;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em;
    border: 2px solid black;
    border-radius: 3px;
    color: black;
    background-color: transparent;
    ${props => props.danger && css`
        background-color: red;
        color: white;
        border: 2px white;
        &:hover {
            background-color: orange
        }
    `}
    &:hover {
        background: green;
        cursor: pointer;
    }
`;

export default Button