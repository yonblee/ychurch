import styled from "styled-components";

export const CONTAINER = styled.main`
    width: 99.98vw;
    height: 99.98vh;
    background: var(--blue-gradient);
    display: grid;
    place-items: center;
    place-content: center;
`

export const FORMWRAPPER = styled.article`
    min-height: 278px;
    width: 360px;
`

export const IMAGE = styled.img`
    width: 192px;
    /* height: 45px; */
`

export const INPUTGROUP = styled.div`
    display: flex;
    gap: 12px;
    margin: 0 13px;

    > * {
        flex: 1;
    }
    > *:last-child {
        flex: 2;
    }
`

export const LABELPARA = styled.p`
    display: inline-block;
    line-height: 0;
    padding: 0;
    margin: 13px;
    margin-top: 0;
`

export const HEADLINE = styled.h6`
    padding-top: 12px;
    padding-bottom: 6px;
    line-height: 0;
`