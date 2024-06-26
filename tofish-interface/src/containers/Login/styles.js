import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #3972f1;
    display: flex;
`;

export const LeftContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 60%;
    }
`
;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 50%;
    justify-content: center;
    align-items: center;

    p{
        color: #04373a;
        font-size: 18px;
        font-weight: 600;
        text-align: center;

        a {
            color: #e37e38;
            text-decoration: underline;
        }
    }
`;

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: #04373a;

    span {
        font-family: "Road Rage", sans-serif;
        color: #e37e38;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    

    input {
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label {
        font-size: 18px;
        font-weight: 600;
        color: #04373a;
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color: #e37e38;
        font-weight: 600;
        height: 10px;
    }
`;

