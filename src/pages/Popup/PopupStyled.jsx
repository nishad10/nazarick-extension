import styled from 'styled-components';
import { Button } from 'antd';

const ButtonWrapper = styled(Button)`
position: absolute;
top: 10px;
left: 10px;
`;

const Wrapper = styled.div`
.App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;

export { ButtonWrapper, Wrapper }

