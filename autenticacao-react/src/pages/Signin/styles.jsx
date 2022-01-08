import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;

    @media (max-width: 1000px) {
        width: 60%;
    }

    @media (max-width: 600px) {
        width: 70%;
    }
`;
export const Input = styled.input`
    border-radius: var(--border-radius);
    font-size: 18px;
    max-width: 100%;
    padding: 15px 20px;
    margin-bottom: 20px;
    border:2px solid var(--color-primary);
    color: var(--color-gray);
    background-color:var(--color-background);
`;

export const Button = styled.button`
    border-radius: var(--border-radius);
    font-size: 18px;
    width: 100%;
    height:65px;
    padding: 15px 20px;
    font-weight: 700;
    background: var(--color-gradient);
    border: none;
    color: var(--color-white);
    cursor: pointer;

    &:hover {
        background: var(--color-gradient-hover);
    }
`;

export const Animation = styled.div`
    width: 37px;
    margin: auto;
`;

export const Image = styled.img`
    width: 200px;
    margin: auto;
    margin-bottom: 20px;
    cursor: pointer;
`;