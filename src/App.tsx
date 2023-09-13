import { useState } from 'react'
import './App.css'
import * as C from './Styles';
import { MdDonutLarge } from 'react-icons/md';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';


function App() {
    const [count, setCount] = useState(0)

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
                    aa
                </C.Search>

                <C.ChatList>
                    bb
                </C.ChatList>
            </C.Sidebar>
            <C.ContentArea>
                conteudo
            </C.ContentArea>
        </C.AppWindow>
    )
}

export default App
