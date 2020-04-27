import styled from 'styled-components';

const primary = '#00FC0D';
const secondary = '#0f7d15';

const buttonPrimary = '#00B309';
const buttonSecondary = '#009C08';

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  border: 1px solid ${primary};
  border-radius: 8px;
  box-shadow: 0 0 8px ${secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 30px 10px;

  h1 {
    margin-bottom: 15px;
  }

  input {
    border: none;
    border-bottom: 1px solid ${secondary};
    width: 100%;
    height: 45px;
    font-size: 20px;
    margin: 15px 0;
    color: #FFF;

    &:focus {
      border-bottom: 1px solid ${primary};
      border-top: none;
    }
  }

  button {
    width: 100%;
    height: 45px;
    font-size: 20px;
    border-radius: 4px;
    background-color: ${buttonPrimary};
    box-shadow: 0 4px 0 #007506;
    color: #FFF;
    margin-top: 30px;
    margin-bottom: 35px;
    cursor: pointer;

    &:hover {
      background-color: ${buttonSecondary};
    }

    &:active {
      box-shadow: none;
      transform: translateY(4px);
    }
  }

  a {
    color: #C7C7C7;
    margin-bottom: 15px;
  }
`;
