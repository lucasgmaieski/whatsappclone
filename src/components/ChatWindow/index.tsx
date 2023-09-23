import * as C from "./styles";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdAttachFile, MdOutlineEmojiEmotions, MdClose, MdSend, MdOutlineMic } from "react-icons/md";
import { FiMoreVertical } from 'react-icons/fi';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

export default () => {
    const handleEmojiClick = () => {

    }
    return (
        <C.ChatWindow>
            <C.ChatWindowHeader>
                <C.ChatWindowHeaderInfo>
                    <C.ChatWindowAvatar src="./Avatar-Profile-Vector.png" alt="" />
                    <C.ChatWindowName> Lucas Maieski</C.ChatWindowName>
                </C.ChatWindowHeaderInfo>

                <C.ChatWindowButtons>
                    <C.ChatWindowBtn>
                        <BiSearchAlt2 style={{color:'#919191'}} />
                    </C.ChatWindowBtn>
                    <C.ChatWindowBtn>
                        <MdAttachFile style={{color:'#919191'}} />
                    </C.ChatWindowBtn>
                    <C.ChatWindowBtn>
                        <FiMoreVertical style={{color:'#919191'}} />
                    </C.ChatWindowBtn>

                </C.ChatWindowButtons>
            </C.ChatWindowHeader>
            <C.ChatWindowBody>
                Mensagens
            </C.ChatWindowBody>
            <C.ChatWindowEmojiArea>
                <Picker 
                    data={data} 
                    searchPosition="none"
                    previewPosition="none"
                    dynamicWidth={true}
                    onEmojiSelect={handleEmojiClick}
                />
            </C.ChatWindowEmojiArea>
            <C.ChatWindowFooter>
                <C.ChatWindowPre>
                    <C.ChatWindowBtn>

                        <MdClose style={{color:'#919191'}} />
                    </C.ChatWindowBtn>
                    <C.ChatWindowBtn>
                        <MdOutlineEmojiEmotions style={{color:'#919191'}} />
                    </C.ChatWindowBtn>
                </C.ChatWindowPre>
                <C.ChatWindowInputArea>
                    <C.ChatWindowInput
                        type="text"
                        placeholder="Digite uma mensagem"
                    >

                    </C.ChatWindowInput>

                </C.ChatWindowInputArea>
                <C.ChatWindowPos>
                    <C.ChatWindowBtn>
                        <MdSend style={{color:'#919191'}} />
                    </C.ChatWindowBtn>
                </C.ChatWindowPos>
            </C.ChatWindowFooter>
        </C.ChatWindow>
    );
}