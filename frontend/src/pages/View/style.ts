import styled from 'styled-components'

export const NoBriefing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  span,
  p {
    color: ${(props) => props.theme['grey-800']};
  }

  span {
    font-size: 1.5rem;
  }
  span strong {
    color: ${(props) => props.theme['orange-light']};
  }
  p {
    margin-top: 0.625rem;
  }

  svg {
    margin-top: 1rem;
    width: 2rem;
    color: ${(props) => props.theme['orange-light']};
  }
`

export const ContainerView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`

export const OrderState = styled.div`
  margin-top: 2rem;

  select {
    font-weight: bold;
    transition: color 0.3s ease;

    padding-left: 0.875rem;
    width: 14rem;
    height: 2.5rem;
    border-radius: 8px;

    color: ${(props) => props.theme.orange};
    background-color: ${(props) => props.theme.ice};
  }

  select,
  option {
    border: none;
    cursor: pointer;
  }
`

export const ContainerTable = styled.div`
  max-height: 40rem;
  overflow-y: scroll;
  padding: 12px;
`

export const Table = styled.table`
  td,
  th {
    padding-left: 1rem;
  }

  thead {
    tr {
    }
    th {
      background-color: ${(props) => props.theme.ice};
      text-align: start;
      height: 3.5rem;

      &:first-child {
        border-top-left-radius: 8px;

        width: 16rem;
      }
      &:nth-child(2) {
        width: 25rem;
      }
      &:nth-child(3) {
        width: 10rem;
      }
      &:nth-child(4) {
        width: 8rem;
      }
      &:nth-child(5) {
        text-align: center;
        width: 5rem;
      }
      &:nth-child(6) {
        text-align: center;
        width: 5rem;
        border-top-right-radius: 8px;
      }
    }
  }

  tbody {
    transition: ease-in-out 0.3s;

    tr {
      &:hover {
        cursor: pointer;
        transform: scale(1.02);
      }
    }
    td {
      height: 3.5rem;
      &:nth-child(5) {
        text-align: center;

        button {
          border: none;
          background-color: transparent;

          svg {
            color: ${(props) => props.theme['gray-800']};
            transition: color 0.3s ease;

            &:hover {
              color: ${(props) => props.theme.red};
            }
          }
        }
      }

      &:nth-child(6) {
        svg {
          color: ${(props) => props.theme['gray-800']};
          transition: color 0.3s ease;

          &:hover {
            color: ${(props) => props.theme.blue};
          }
        }
      }
    }
  }

  tbody > tr:nth-of-type(2n) {
    background-color: ${(props) => props.theme.ice};
  }
`
