import { useState, useEffect } from 'react'
import './App.css'
import * as C from './Styles';
import { MdDonutLarge } from 'react-icons/md';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import ChatlistItem from './components/ChatlistItem';


function App() {
    const [chatlist, setChatlist] = useState([{},{},{},{}])

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
                        <ChatlistItem key={key}/>
                    ))}
                </C.ChatList>
            </C.Sidebar>
            <C.ContentArea>
                conteudo
            </C.ContentArea>
        </C.AppWindow>
    )
}

export default App
