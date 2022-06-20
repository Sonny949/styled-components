import styled from "styled-components";

const PlainLink = styled.a`
    font-size: 1.2rem;
    text-decoration: none;
    color: black;
    margin: 0.5rem;
    &:hover {
        background: red;
        color: white;
    }
`;

export default PlainLink