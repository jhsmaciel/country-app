import React, { useState } from 'react';
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { StyleProps } from 'config/styles';
import { useTheme } from 'contexts/ThemeContext';

export interface Value {
    label: string;
    value?: string;
}

interface SelectOptionProps {
    values: Value[]
    initial?: Value
    onChange(value: string | undefined): void;
    value: string | undefined;
} 

export const Option = styled.option`
    margin-top: 10px;
    min-height: 32px;
`

const DropDownContainer = styled.div`
    width: 175px;
`

const DropDownHeader = styled.div<StyleProps>`
    height: 48px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 1px 2px 5px 1px rgba(0,0,0,0.1);
    border-width: 0px;
    background: ${prop => prop.styleContext.elements};
    color: ${prop => prop.styleContext.text};
`;

const DropDownListContainer = styled.div`
    margin-top: 8px;
    position: absolute;
    width: 175px;
`;

const DropDownList = styled.ul<StyleProps>`
    padding: 0;
    margin: 0;
    background: ${prop => prop.styleContext.elements};
    color: ${prop => prop.styleContext.text};
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 1px 2px 5px 1px rgba(0,0,0,0.1);
    padding-top: 16px;
`;

const ListItem = styled.li`
    list-style: none;
    padding-left: 20px;
    height: 32px;
    align-self: center;
`;

export const SelectOption: React.FC<SelectOptionProps> = (props) => {
    const { style } = useTheme();
    const { initial, values } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggling = () => setIsOpen(!isOpen);

    return (
        <DropDownContainer>
            <DropDownHeader styleContext={style} onClick={toggling}>
                {values.find(it => it.value === props.value)?.label || initial?.label } 
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </DropDownHeader>
            {isOpen && (
            <DropDownListContainer>
                <DropDownList styleContext={style}>
                    {(initial ? [initial].concat(values) : values).map(option => (
                        <ListItem onClick={() => {toggling(); props.onChange(option.value);}} key={option.value}>
                            {option.label}
                        </ListItem>
                    ))}
                </DropDownList>
            </DropDownListContainer>
            )}
      </DropDownContainer>
    ) 
}
