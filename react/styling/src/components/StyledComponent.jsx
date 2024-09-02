import React from 'react';
import styled from 'styled-components';

const StyledComponent = () => {
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;
    const Wrapper = styled.div`
        margin: 0 6em;
        padding: 4em;
        background: papayawhip;
        @media screen and (max-width: 768px) {
            margin: 0;
        }
    `;

    const Button = styled.button`
        background: ${props => props.primary ? 'palevioletred' : 'white'};
        color: ${props => props.primary ? 'white' : 'palevioletred'};
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
    `;


    return (
        <div>
            <Wrapper>
                <Title>
                    Hello World, this is my first styled component!
                </Title>
                <Button>Normal</Button>
                <Button primary>Primary</Button>
            </Wrapper>
        </div>
    );
};

export default StyledComponent;