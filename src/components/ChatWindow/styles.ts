import styled from "styled-components";

export const ChatWindow = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;
export const ChatWindowHeader = styled.div`
    height: 60px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const ChatWindowHeaderInfo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
export const ChatWindowAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 15px;
    margin-right: 15px;
`;
export const ChatWindowName = styled.div`
    font-size: 17px;
    color: #fff;
`;
export const ChatWindowButtons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
`;
export const ChatWindowBtn = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    transition: all ease .3s;
`;
export const ChatWindowBtnClose = styled(ChatWindowBtn)<{emojiopen: string}>`
    /* ${ChatWindowBtn}; */
    width: ${props=>props.emojiopen === 'true' ? '40px' : '0px'};
`;
export const ChatWindowEmojiArea = styled.div<{emojiopen: string}>`
    height: ${props=>props.emojiopen === 'true' ? '200px' : '0px'};
    overflow-y: hidden;
    transition: all ease .3s;
    em-emoji-picker {
        --rgb-background: 262, 240, 283, .0;
        width: 100%;

    }
    #root {
        background-color: transparent;
    }
`;

export const ChatWindowBody = styled.div`
    flex: 1;
    overflow-y: auto;
    background-color: #e5ddd5;
    background-size: cover;
    background-position: center;
    background-image: url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png);
    padding: 20px 30px;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0, 0.2);
    }
`;
export const ChatWindowFooter = styled.div`
    height: 62px;
    display: flex;
    align-items: center;
`;
export const ChatWindowPre = styled.div`
    display: flex;
    margin: 0 15px;
`;
export const ChatWindowInputArea = styled.div`
    flex: 1;
`;
export const ChatWindowInput = styled.input`
    width: 100%;
    height: 40px;
    border: 0;
    outline: 0;
    background-color: #fff;
    border-radius: 8px;
    font-size: 15px;
    color: #4a4a4a;
    padding-left: 15px;
`;
export const ChatWindowPos = styled.div`
    display: flex;
    margin: 0 15px;
`;

