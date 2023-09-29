import { useEffect, useState } from "react";
import * as C from "./styles"

type Props = {
    data: MessageItemType;
    user: UserType;
}
export const MessageItem = ({data, user}: Props) => {
    const [time, setTime] = useState('');

    useEffect(()=> {
        if(data.date > 0) {
            let d  = new Date(data.date.seconds * 1000);
            let hours = d.getHours();
            let minutes = d.getMinutes();
            let hoursString = hours < 10 ? '0'+hours : hours;
            let minutesString = minutes < 10 ? '0'+minutes : minutes;
            console.log(data.date)
            setTime(`${hoursString}:${minutesString}`);
        }
    }, [data]);
    return(
        <C.MessageLine userisauthor={(user.id === data.author).toString()}>
            <C.MessageItem userisauthor={(user.id === data.author).toString()}>
                <C.MessageText>
                    {data.body}
                </C.MessageText>
                <C.MessageDate>{time}</C.MessageDate>
            </C.MessageItem>
        </C.MessageLine>
    );
}