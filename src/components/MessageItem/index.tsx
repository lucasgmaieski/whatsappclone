import * as C from "./styles"

type Props = {
    data: MessageItemType;
    user: UserType;
}
export const MessageItem = ({data, user}: Props) => {
    return(
        <C.MessageLine userisauthor={(user.id === data.author).toString()}>
            <C.MessageItem userisauthor={(user.id === data.author).toString()}>
                <C.MessageText>
                    {data.body}
                </C.MessageText>
                <C.MessageDate>
                    hoje
                </C.MessageDate>
            </C.MessageItem>
        </C.MessageLine>
    );
}