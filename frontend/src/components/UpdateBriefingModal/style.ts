import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled.div`
  max-width: 32rem;
  width: 100%;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ExitModal = styled.div`
  button {
    border-radius: 8px;
    padding: 1rem;
    border: none;
    color: ${(props) => props.theme.ice};
    position: absolute;
    background: transparent;
    top: 1.5rem;
    left: 24.3rem;
    line-height: 0;
    cursor: pointer;

    svg {
      transition: color 0.3s ease;

      &:hover {
        color: ${(props) => props.theme.orange};
      }
    }
  }
`

export const Form = styled.form`
  margin-top: 2rem;
  width: 24rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['grey-100']};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  input,
  select {
    outline: none;

    width: 100%;
    height: 3rem;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme.ice};
    padding-left: 1rem;
  }

  button {
    margin-top: 2rem;
    width: 10rem;
    height: 3rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    color: ${(props) => props.theme.ice};
    background-color: ${(props) => props.theme.orange};

    &:hover {
      background-color: ${(props) => props.theme['orange-dark']};
    }
  }
`
