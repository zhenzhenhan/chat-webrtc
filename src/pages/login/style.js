import styled from 'styled-components'

export const LoginWrapper = styled.div`
  .login-page_container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-page_login_box {
    width: 350px;
    height: 500px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .login-page_logo_container {
    width: 80%;
    display: flex;
    justify-content: center;
  }

  .login-page_logo_image {
    width: 200px;
  }

  .login-page_title_container {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
