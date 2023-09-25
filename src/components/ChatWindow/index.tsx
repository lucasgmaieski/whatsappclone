import * as C from "./styles";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdAttachFile, MdOutlineEmojiEmotions, MdClose, MdSend, MdOutlineMic } from "react-icons/md";
import { FiMoreVertical } from 'react-icons/fi';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useState, ChangeEvent, useEffect, useRef } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'regenerator-runtime/runtime';
import { MessageItem } from "../MessageItem";

type Props = {
    user: UserType
}
export default ({user}: Props) => {

    const {
        transcript,
        interimTranscript,
        finalTranscript,
        // resetTranscript,
        listening,
    } = useSpeechRecognition();

    useEffect(() => {
        if (finalTranscript !== '') {
          console.log('Got final result:', finalTranscript);
        }
    }, [interimTranscript, finalTranscript]);
    useEffect(() => {
        setText(transcript);
        console.log(text);
    }, [transcript]);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
    }
    const handleMicClick = () => {
        SpeechRecognition.startListening({
            continuous: false,
            language: "pt-br"
        });

    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [list, setList] = useState<MessageItemType[]>([
        {
            author: 123,
            body: 'Olá pessoal',
            image: '',
            date: '',
        },
        {
            author: 123,
            body: 'eai man',
            image: '',
            date: '',
        },
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
        { author: 444, body: 'opaaa', image: '', date: '',},
    ]);


    const handleEmojiClick = (e:any) => { setText(text + e.native) }
    const handleOpenEmoji = () => { setEmojiOpen(true); }
    const handleCloseEmoji = () => { setEmojiOpen(false); }
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => { setText(e.target.value); }
    const body = useRef<HTMLInputElement>(null)

    const handleSendClick = () => {
        
    }
    useEffect(() => {
        if (body.current) {
          if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
          }
          console.log(body);
        }
      }, [list]);

    return (
        <C.ChatWindow>
            <C.ChatWindowHeader>
                <C.ChatWindowHeaderInfo>
                    <C.ChatWindowAvatar src="./Avatar-Profile-Vector.png" alt="" />
                    <C.ChatWindowName> Lucas Maieski</C.ChatWindowName>
                </C.ChatWindowHeaderInfo>

                <C.ChatWindowButtons>
                    <C.ChatWindowBtn>
                        <BiSearchAlt2 size={25} style={{color:'#919191'}} />
                    </C.ChatWindowBtn>
                    <C.ChatWindowBtn>
                        <MdAttachFile size={25} style={{color:'#919191'}} />
                    </C.ChatWindowBtn>
                    <C.ChatWindowBtn>
                        <FiMoreVertical size={25} style={{color:'#919191'}} />
                    </C.ChatWindowBtn>

                </C.ChatWindowButtons>
            </C.ChatWindowHeader>
            <C.ChatWindowBody ref={body}>
                {list.map((item, key)=>(
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
                {listening ? 'ligado' : 'desligado'} 
            </C.ChatWindowBody>
            <C.ChatWindowEmojiArea emojiopen={emojiOpen.toString()}>
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
                    <C.ChatWindowBtnClose 
                        onClick={handleCloseEmoji}
                        emojiopen={emojiOpen.toString()}
                    >
                        <MdClose size={25} style={{color:'#919191'}} />
                    </C.ChatWindowBtnClose>
                    <C.ChatWindowBtn onClick={handleOpenEmoji}>
                        <MdOutlineEmojiEmotions size={25} style={{color: emojiOpen ? '#009688' :'#919191'}} />
                        
                    </C.ChatWindowBtn>
                </C.ChatWindowPre>
                <C.ChatWindowInputArea>
                    <C.ChatWindowInput
                        type="text"
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={handleChangeInput}
                    >

                    </C.ChatWindowInput>

                </C.ChatWindowInputArea>
                <C.ChatWindowPos>
                    {(text === '' || listening) && 
                        <C.ChatWindowBtn>
                            <MdOutlineMic onClick={handleMicClick} size={25} style={{color: listening ? '#126ece' : '#919191'}} />
                        </C.ChatWindowBtn>
                    }
                    {text !== '' &&
                        <C.ChatWindowBtn>
                            <MdSend onClick={handleSendClick} size={25} style={{color:'#919191'}} />
                        </C.ChatWindowBtn>
                    }
                </C.ChatWindowPos>
            </C.ChatWindowFooter>
        </C.ChatWindow>
    );
}