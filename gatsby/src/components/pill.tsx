import React from "react";
import styled from "@emotion/styled";


interface PillProps {
    name: string;
    color?: 'green' | 'red' | 'indigo' | 'blue' | 'yellow' | 'purple' | 'gray' | string;
    bold?: boolean;
    children?: React.JSX.Element[] | React.JSX.Element | undefined;
}

export const Pill = ({ name, color = 'gray', bold = true, children, }: PillProps): React.JSX.Element => {
    const ColoredTag = styled.div`
        height: 24px;
        padding-left: 12px;
        padding-right: 12px;
        border-radius: 12px;
        display: inline-block;
        line-height: 23px;
        background: ${color};
        color: dark${color};
        font-size: 12px;
        font-weight: ${bold ? 'bold' : 'normal'};
        overflow: hidden;
        border-radius: 10px;
        border: solid 1px black;
    `

    return (
        <ColoredTag>
            { bold ? (
                <b>{name}</b> 
            ) : (
                <>{name}</>
            ) }
            <br />
            {children}
        </ColoredTag>
    )
}

export const BigPill = ({ name, children, color = "red" }: PillProps): React.JSX.Element => {
    const BigPillHeader = styled.div`
        font-size: 20px;
        font-weight: 400;
    `
    const BigPillStyle = styled.div<{ color?: string }>`
        background: ${color};
        color: black;
        width: 400px;
        border-radius: 10px;
        padding: 15px;
    `
    return (
        <BigPillStyle>
            <BigPillHeader>{name}</BigPillHeader>
            <br />
            {children}
        </BigPillStyle>
    )
}

export default Pill;