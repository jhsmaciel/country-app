import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from "styled-components";
import { StyleProps } from "config/styles";
import { useTheme } from 'contexts/ThemeContext';

interface ButtonProps {
    width?: number | undefined;
}

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps> = (props) => {

    const { style } = useTheme();

    return (
        <ButtonStyled styleContext={style} width={props.width} {...props} >{props.children}</ButtonStyled>
    )
}

const ButtonStyled = styled.button<StyleProps & ButtonProps>`
    background-color: ${props => props.styleContext.elements};
    background: ${props => props.styleContext.elements};
    color: ${props => props.styleContext.text};
    border-width: 0px;
    box-shadow: 1px 2px 5px 1px rgba(0,0,0,0.1);
    border-radius: 4px;
    height: 28px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    ${props => props.width ? css`width: ${props.width}px;` : ''}
    align-items: center;
    cursor: pointer;
`