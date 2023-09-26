import { useState, useEffect } from 'react';
import * as C from "./styles"
import { IoMdArrowRoundBack } from "react-icons/io";
import Api from '../../Api';
type Props = {
    user: UserType;
    chatlist: ChatItemType[];
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}
export const NewChat = ({user, chatlist, show, setShow}: Props) => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        const getList = async () => {
            if(user !== null) {
                let results = await Api.getContactList(user.id);
                setList(results);
            }
        }
        getList();
    }, [user])
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