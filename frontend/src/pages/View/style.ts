import styled from "styled-components";

export const ContainerView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
`

export const OrderState = styled.div`
    button{
        margin-top: 2rem;
        width: 10rem;
        height: 3rem;
        border-radius: 8px;
        border: none;
        cursor: pointer;

        color: ${props => props.theme['ice']};
        background-color: ${props => props.theme['orange']};

        &:hover{
        background-color: ${props => props.theme['orange-dark']};
    }
    }
`

export const Table = styled.table`
    width: 100%;
    border: 1px solid black;
    padding: 1rem;

    thead{
        
        th{
            text-align: start;
            &:first-child{
                width: 15rem;
            }
            &:nth-child(2){
                width: 25rem;
            }
            &:nth-child(3){
                width: 12rem;
            }
            &:nth-child(4){
                width: 10rem;
            }
            &:nth-child(5){
                width: 8rem;
            }
        }
    }

    tbody{

        td{
            &:nth-child(5){
                text-align: center;

                button{
                    border: none;
                }
            }

        }


    }

    tbody > tr:nth-of-type(2n){
        background-color: ${props => props.theme['ice']};
    }



`