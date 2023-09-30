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
import { NewChat } from './components/NewChat';
import { Login } from './components/Login';
import Api from './Api';


function App() {
    const [chatlist, setChatlist] = useState<ChatItemType[]>([])
    const [activeChat, setActiveChat] = useState<ChatItemType | null>(null);
    const [user, setUser] = useState<UserType | null>(null);
    const [showNewChat, setShowNewChat] = useState(false);

    useEffect(()=> {
        if(user !== null) {
            let unsub = Api.onChatList(user.id, setChatlist);
            return unsub;
        }
    }, [user]);

    const handleNewChat = () => {
        setShowNewChat(true);
    }

    const handleLoginData = async (u: any) => {
        let newUser = {
            id: u.result.user.uid,
            name: u.result.user.displayName,
            avatar: u.imageProfile
        }

        await Api.addUser(newUser);

        setUser(newUser);
    }
    
    if(user === null) {
        return (<Login onReceive={handleLoginData}/>)
    }

    return (
        <C.AppWindow>
            <C.Sidebar>
                <NewChat 
                    user={user} 
                    show={showNewChat} 
                    setShow={setShowNewChat}
                />
                <header>
                    <C.HeaderAvatar src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=6905397726190656&height=200&width=200&ext=1698196298&hash=AeQNGXa0BFTGtQ6x-9s" alt="" />
                    <C.HeaderButtons>
                        <C.HeaderBtn>
                            <MdDonutLarge style={{color: '#919191'}} />
                        </C.HeaderBtn>
                        <C.HeaderBtn onClick={handleNewChat}>
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
                            data={item}
                            active={activeChat?.chatId === chatlist[key].chatId}
                            onClick={()=>setActiveChat(chatlist[key])}
                        />
                    ))}
                </C.ChatList>
            </C.Sidebar>
            <C.ContentArea>
                {activeChat?.chatId !== undefined &&
                    <ChatWindow
                        user={user}
                        data={activeChat}
                    />
                }
                {activeChat?.chatId === undefined &&
                    <ChatIntro />
                }
            </C.ContentArea>
        </C.AppWindow>
    )
}

export default App
