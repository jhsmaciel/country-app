import React from 'react';
import styled from 'styled-components';
import { AiOutlineLoading } from 'react-icons/ai'
import { useTheme } from 'contexts/ThemeContext';

export const LoadingIndicator = () => {
    const { style } = useTheme()
    return (
        <Content>
            <AiOutlineLoading
                size={50}
                color={style.text} 
                style={{ 
                    animation: 'spin 0.7s infinite linear'
                }}
            />
        </Content>
    );
}


const Content = styled.div`
    display: flex;
    margin-top: 50px;
    max-height: 50px;
    justify-content: center;
`
