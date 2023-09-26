import { useState } from 'react';
import Api from '../../Api';
import * as C from './styles';

type Props = {
    onReceive: any;
}
export const Login = ({onReceive}: Props) => {

    const handleFacebokLogin = async () => {
        let resultFull = await Api.fbPopup();
        if(resultFull) {
            onReceive(resultFull);
        } else {
            alert('Erro!');
        }
    }
    return (
        <C.Container>
            <button onClick={handleFacebokLogin}>Logar com Facebook</button>
        </C.Container>
    );
}
