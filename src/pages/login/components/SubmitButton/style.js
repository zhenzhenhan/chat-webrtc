import styled from 'styled-components'

export const SubmitButtonWrapper = styled.div`
  .login-page_button_container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-page_button {
    border-radius: 50px;
    outline: none;
    border: 1px solid #e6e5e8;
    font-size: 16px;
    padding: 10px 10px;
    width: 170px;
    transition: 0.3s;
  }

  .login-page_button:hover {
    background-color: #8706f0;
    opacity: 0.5;
  }
`
