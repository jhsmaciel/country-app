import React from 'react';
import styled from 'styled-components';
import { StyleProps } from 'config/styles';
import { useTheme } from 'contexts/ThemeContext';


export const Label = styled.span<StyleProps>`
    color: ${props => props.styleContext.text};
    font-size: 14px;
    font-weight: 600;
`

const Value = styled.p<StyleProps>`
    color: ${props => props.styleContext.text};
    padding-top: 5px;
    padding-bottom: 4px;
    font-size: 14px;
`

interface LabelValueProps {
    label: string;
    value: string | number;
} 

export const LabelValue:React.FC<LabelValueProps> = ({label, value}) => {
    const { style } = useTheme();

    return (
        <Value styleContext={style}>
            <Label styleContext={style}>{label}: </Label>
            {value}
        </Value>
    )
}