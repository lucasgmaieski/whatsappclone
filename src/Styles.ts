import { styled} from 'styled-components';

export const AppWindow = styled.div`
    display: flex;
    height: 100vh;
    background-color: #ededed;
`;

export const Sidebar = styled.aside`
    width: 35%;
    max-width: 415px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ddd;

    header {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
    }
`;


export const Search = styled.div`

`;
export const ChatList = styled.div`

`;
export const HeaderAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
`;
export const HeaderButtons = styled.div`
    display: flex;
`;
export const HeaderBtn = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ContentArea = styled.div`

`;