import styled from "styled-components";


export const WRAPPER = styled.main`
    width: 99.98vw;
    height: 99.98vh;
    display: grid;
    place-items: center;
    background: var(--blue-gradient);
    /* background: linear-gradient(to bottom right, #b187e9e0, #5f8fe785, #d490c963); */
`
export const CONTENT = styled.section`
    max-height: 75vh;
    max-width: 85vw;
    display: flex;
    gap: 12px;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    
` 
export const FIGURE = styled.figure`
    width: 550px;
    height: 320px;
    border-radius: 13px;
    outline: 15px solid #ffffff4d;
    margin-left: 12px;


    > img {
      height: inherit;
      width: inherit;
    }
    @media (max-width: 768px) {
        margin-top: 20%;
        width: 100%;
        height: 250px;
    }
`