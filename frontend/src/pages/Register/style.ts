import styled from "styled-components";

export const ContainerRegister = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Description = styled.div`
    margin-top: 10rem;
    text-align: center;
`

export const Form = styled.form`
    margin-top: 2rem;
    width: 24rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;


    input, select{
        outline: none;

        width: 100%;
        height: 3rem;
        border-radius: 8px;
        border: none;
        background-color: ${props => props.theme['ice']};
        padding-left: 1rem;
    }

    button{
        width: 10rem;
        height: 3rem;
        color: ${props => props.theme['ice']};
        border-radius: 8px;
        border: none;
        background-color: ${props => props.theme['orange']};

        &:hover{
            background-color: ${props => props.theme['orange-dark']};
        }
    }

`