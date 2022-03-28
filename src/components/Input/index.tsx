import { InputHTMLAttributes, useRef } from "react";
import { FaSearchLocation } from "react-icons/fa";
import styled, { css, CSSProperties } from "styled-components";
import { StyleProps } from "config/styles";
import { useTheme } from "contexts/ThemeContext";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    styleBox?: CSSProperties
}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
    const { style } = useTheme();
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <BoxInput style={props.styleBox} styleContext={style} onClick={() => inputRef.current?.focus()}>
            <FaSearchLocation 
                style={{ alignSelf: 'center', marginRight: 18, marginLeft: 16}} 
                size={16}
                onClick={() => inputRef.current?.focus()}
            />
            <RawInput
                ref={inputRef} 
                styleContext={style}
                {...props}
            />
        </BoxInput>
    )
}

export const BoxInput = styled.div<StyleProps>`
    height: 48px;
    ${props => css`background: ${props.styleContext.elements};`}
    ${props => css`color: ${props.styleContext.text};`}
    border-width: 0px;
    width: 100%;
    padding-left: 10px;
    border-radius: 4px;
    box-shadow: 1px 2px 5px 1px rgba(0,0,0,0.1);
    display: flex;
`

const RawInput = styled.input<StyleProps>`
    height: 100%;
    background-color: transparent;
    color: ${props => props.styleContext.text};
    ::placeholder {
        color: ${props => props.styleContext.text};
        opacity: 0.8;
    }
    border-radius: 4px;
    border-width: 0px;
    width: 100%;
`

export const Input = styled.input<StyleProps>`
    height: 48px;
    ${props => css`background: ${props.styleContext.elements};`}
    ${props => css`color: ${props.styleContext.text};`}
    border-width: 0px;
    width: 40%;
    padding-left: 10px;
    border-radius: 4px;
    box-shadow: 1px 2px 5px 1px rgba(0,0,0,0.1);
`



