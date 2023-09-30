import { useState, useEffect } from "react";
import * as C from "./styles";

type Props = {
    onClick: () => void;
    active: boolean;
    data: ChatItemType;
}
export default ({onClick, active, data}: Props) => {
    const [time, setTime] = useState('');

    useEffect(()=> {
        if(data.lastMessageDate > 0) {
            let d  = new Date(data.lastMessageDate.seconds * 1000);
            let hours = d.getHours();
            let minutes = d.getMinutes();
            let hoursString = hours < 10 ? '0'+hours : hours;
            let minutesString = minutes < 10 ? '0'+minutes : minutes;
            console.log(data.lastMessageDate)
            setTime(`${hoursString}:${minutesString}`);
        }
    }, [data]);
    return (
        <C.ChatListItem 
            className={active ? 'active' : ''}
            onClick={onClick}
        >
            <C.ChatListAvatar src={data.image} alt="" />
            <C.ChatListLines>
                <C.ChatListLine>
                    <C.ChatListName>{data.title}</C.ChatListName>
                    <C.ChatListDate>{time}</C.ChatListDate>
                </C.ChatListLine>
                <C.ChatListLine>
                    <C.ChatListLastMsg>
                        <p>{data.lastMessage}</p>
                    </C.ChatListLastMsg>
                </C.ChatListLine>
            </C.ChatListLines>
        </C.ChatListItem>
    );
}