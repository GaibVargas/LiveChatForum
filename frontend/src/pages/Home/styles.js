import styled from 'styled-components';

const primary = '#00FC0D';
const secondary = '#0f7d15';

const buttonPrimary = '#00B309';
const buttonSecondary = '#009C08';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
  background-color: #000;
  color: #FFF;

  header {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .utils {
      position: absolute;
      top: 5px;
      right: 10px;

      button {
        background-color: ${buttonPrimary};
        padding: 10px 15px;
        margin: 0 5px;
        border-radius: 4px;
        color: #FFF;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }

  main {
    width: 95%;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;

    .user_info {
      width: 95%;
      max-width: 750px;
      display: flex;
      align-items: center;

      .avatar {
        margin: 15px 10px;
        background-color: ${secondary};
        padding: 10px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
      }

      h2 {
        text-transform: capitalize;
      }
    }

    .chat {
      border: 1px solid green;
      border-radius: 8px;
      width: 100%;
      max-width: 750px;
      height: 400px;
      overflow: auto;
      padding: 10px;

      display: flex;
      flex-direction: column;
      
      .message_user {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        margin: 8px 0;

        .user_avatar {
          margin: 0px 10px;
          background-color: ${primary};
          padding: 5px;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: bold;
          color: #000;
          text-transform: uppercase;
        }

        .text {
          background-color: #FFF;
          color: #000;
          font-size: 18px;
          padding: 5px;
          position: relative;
          border-radius: 4px;
          right: -5px;
          max-width: 80%;
        }
      }

      .message {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 8px 0;

        .user_avatar {
          margin: 0px 10px;
          background-color: ${primary};
          padding: 5px;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: bold;
          color: #000;
          text-transform: uppercase;
        }

        .text {
          background-color: #FFF;
          color: #000;
          font-size: 18px;
          padding: 5px;
          position: relative;
          border-radius: 4px;
          left: -5px;
          max-width: 80%;
        }
      }
    }

    .input {
      border-radius: 25px;
      width: 95%;
      max-width: 750px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;

      input {
        width: 100%;
        margin-right: 5px;
        border: 1px solid ${secondary};
        border-radius: 25px;
        height: 45px;
        color: #FFF;
        font-size: 20px;
        padding: 2px 20px;

        &:focus {
          box-shadow: 0 0 4px ${primary};
        }
      }

      button {
        width: 45px;
        border-radius: 25px;
        background-color: ${buttonPrimary};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
          background-color: ${buttonSecondary};
        }
      }
    }
  }
`;

export const Arrow = styled.div`
  width: 10px;
  height: 10px;
  background-color: #FFF;
  transform: rotate(-45deg);
`;
