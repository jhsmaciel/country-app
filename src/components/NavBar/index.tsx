import React from "react";
import styled from "styled-components";
import { FaRegMoon } from "react-icons/fa";
import { StyleProps } from "config/styles";
import { useTheme } from "contexts/ThemeContext";
import { capitalizeFirstLetter } from "utils";

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = () => {

    const {style, mode, changeTheme} = useTheme();

    return (
        <Header styleContext={style}>
            <Content>
                <Title color={style.text}>Where in the world?</Title>
                <Button 
                    onClick={() => {
                        changeTheme(mode === 'dark' ? 'light' : 'dark')
                    }}
                    
                >
                    <FaRegMoon style={{ marginRight: 10}} color={style.text} />
                    <p style={{ color: style.text, fontSize: 15}}>{capitalizeFirstLetter(mode)} Mode</p>
                </Button>
            </Content>
        </Header>
    )
}

const Title = styled.strong`
    color: ${props => props.color};
    font-size: 24px;
`

const Header = styled.header<StyleProps>`
    height: 70px;
    width: 100%;
    background: ${props => props.styleContext.elements};
    box-shadow: 0px -1px 5px 3px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Content = styled.div`
    height: 100%;
    padding: 0 60px;
    width: 100%;
    justify-content: space-between;
    max-width: 1440px;
    flex-direction: row;
    align-items: center;
    display: flex;
`