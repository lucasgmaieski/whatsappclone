import { useState } from 'react';
import * as C from "./styles"
import { IoMdArrowRoundBack } from "react-icons/io";
type Props = {
    user: UserType;
    chatlist: ChatItemType[];
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}
export const NewChat = ({user, chatlist, show, setShow}: Props) => {
    const [list, setList] = useState([
        {id: 123, avatar: './Avatar-Profile-Vector.png', name: 'Lucas Maieski'},
        {id: 123, avatar: './Avatar-Profile-Vector.png', name: 'Luan Maieski'},
        {id: 123, avatar: './Avatar-Profile-Vector.png', name: 'Luis Maieski'},
        {id: 123, avatar: './Avatar-Profile-Vector.png', name: 'Luana Maieski'}
    ]);

    const handleClose = () => {
        setShow(false);
    }
    return(
        <C.NewChat shownewchat={show.toString()}>
            <C.NewChatHead>
                <C.NewChatBackbutton onClick={handleClose}>
                    <IoMdArrowRoundBack size={25} style={{color: '#fff'}} />
                </C.NewChatBackbutton>
                <C.NewChatHeadTitle>Nova Conversa</C.NewChatHeadTitle>
            </C.NewChatHead>
            <C.NewChatList>
                {list.map((item, key)=>(
                    <C.NewChatItem key={key}>
                        <C.NewChatItemAvatar src={item.avatar} alt="" />
                        <C.NewChatItemName>{item.name}</C.NewChatItemName>
                    </C.NewChatItem>
                ))}
            </C.NewChatList>
        </C.NewChat>
    );
}