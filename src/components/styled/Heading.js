import styled from "styled-components";

const Heading = styled.h2`
    color: ${(props) => props.color || 'red'};
    background: ${(props) => props.bg};
    text-align: center;
    `;

export default Heading
