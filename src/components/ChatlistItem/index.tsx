import * as C from "./styles";

type Props = {
    // onClick: () => React.Dispatch<React.SetStateAction<ChatItemType>>
    onClick: () => void;
}
export default ({onClick}: Props) => {
    return (
        <C.ChatListItem onClick={onClick}>
            <C.ChatListAvatar src="./Avatar-Profile-Vector.png" alt="" />
            <C.ChatListLines>
                <C.ChatListLine>
                    <C.ChatListName>Lucas Maieski</C.ChatListName>
                    <C.ChatListDate>19:19</C.ChatListDate>
                </C.ChatListLine>
                <C.ChatListLine>
                    <C.ChatListLastMsg>
                        <p>Opa, tudo bom? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae repellendus fugit blanditiis velit omnis magnam id ut? Omnis, quisquam recusandae asperiores obcaecati eius tempora, quas, facere saepe architecto aliquid pariatur.</p>
                    </C.ChatListLastMsg>
                </C.ChatListLine>
            </C.ChatListLines>
        </C.ChatListItem>
    );
}