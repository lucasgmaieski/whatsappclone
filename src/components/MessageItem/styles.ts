import styled from "styled-components";

export const MessageLine = styled.div<{userisauthor: string}>`
    margin-bottom: 10px;
    display: flex;
    justify-content: ${props=>props.userisauthor === 'true' ? 'flex-end' : 'flex-start'};
`;
export const MessageItem = styled.div<{userisauthor: string}>`
    background-color: ${props=>props.userisauthor === 'true' ? '#dcf8c6' : '#fff'};
    border-radius: 10px;
    box-shadow: 0 1px 1px #ccc;
    display: flex;
    flex-direction: column;
    padding: 3px;
    max-width: 90%;
`;
export const MessageText = styled.div`
    font-size: 14px;
    margin: 5px 40px 5px 5px;
`;
export const MessageDate = styled.div`
    font-size: 11px;
    color: #999;
    margin-right: 5px;
    text-align: right;
    height: 15px;
    margin-top: -15px;
`;