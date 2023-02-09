import styled from 'styled-components'

export const ActiveUserListItemWrapper = styled.div`
  .active_user_list_container {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    user-select: none;

    &:hover {
      background-color: #8a85ff;
    }
  }

  .active_user_list_item {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    transition: 0.3s;
    cursor: pointer;
  }

  .active_user_list_image_container {
    width: 60px;
    margin-left: 30px;
  }

  .active_user_list_text {
    font-size: 24px;
    margin-right: 30px;
  }

  .active_user_list_me {
    font-size: 20px;
    margin-right: 30px;
  }

  .active_user_list_image {
    width: 100%;
  }
`
