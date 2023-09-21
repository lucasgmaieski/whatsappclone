import { useState, useEffect } from 'react'
import './App.css'
import * as C from './Styles';
import { MdDonutLarge } from 'react-icons/md';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import ChatlistItem from './components/ChatlistItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';


function App() {
    const [chatlist, setChatlist] = useState<ChatItemType[]>([
        {chatId: 1, title: 'Fulano Detal', image: './Avatar-Profile-Vector.png'},
        {chatId: 2, title: 'Fulano Detal', image: './Avatar-Profile-Vector.png'},
        {chatId: 3, title: 'Fulano Detal', image: './Avatar-Profile-Vector.png'},
        {chatId: 4, title: 'Fulano Detal', image: './Avatar-Profile-Vector.png'},
        {chatId: 5, title: 'Fulano Detal', image: './Avatar-Profile-Vector.png'},
        {chatId: 6, title: 'Fulano Detal', image: './Avatar-Profile-Vector.png'}
    ])
    const [activeChat, setActiveChat] = useState<ChatItemType | null>(null);
    return (
        <C.AppWindow>
            <C.Sidebar>
                <header>
                    <C.HeaderAvatar src="./Avatar-Profile-Vector.png" alt="" />
                    <C.HeaderButtons>
                        <C.HeaderBtn>
                            <MdDonutLarge style={{color: '#919191'}} />
                        </C.HeaderBtn>
                        <C.HeaderBtn>
                            <BsFillChatRightTextFill style={{color: '#919191'}} />
                        </C.HeaderBtn>
                        <C.HeaderBtn>
                            <FiMoreVertical style={{color: '#919191'}} />
                        </C.HeaderBtn>
                    </C.HeaderButtons>
                </header>
                <C.Search>
                    <C.SearchArea>
                        <AiOutlineSearch fontSize="small" style={{color: '#919191'}}/>
                        <C.SearchInput type="search" placeholder="Procurar ou começar uma nova conversa" />
                    </C.SearchArea>
                </C.Search>

                <C.ChatList>
                    {chatlist.map((item, key)=>(
                        <ChatlistItem 
                            key={key}
                            onClick={()=>setActiveChat(chatlist[key])}
                        />
                    ))}
                </C.ChatList>
            </C.Sidebar>
            <C.ContentArea>
                {activeChat?.chatId !== undefined &&
                    <ChatWindow />
                }
                {activeChat?.chatId === undefined &&
                    <ChatIntro />
                }
            </C.ContentArea>
        </C.AppWindow>
    )
}

export default App
