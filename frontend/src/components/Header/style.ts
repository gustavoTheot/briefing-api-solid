import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 2.5rem;
    
`

export const IconViva = styled.div`
    h2, span{
        cursor: pointer;
        color: ${(props) => props.theme['orange']}
    }

    span{
        font-size: 0.75rem;
    }
`

export const SelectMenu = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    li{
        list-style: none;
        font-weight: 600;

        cursor: pointer;

        a{
            text-decoration: none;
            color: ${props => props.theme['orange']};
        }
    }
`