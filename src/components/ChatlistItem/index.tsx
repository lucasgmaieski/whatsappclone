import * as C from "./styles";

type Props = {
    // onClick: () => React.Dispatch<React.SetStateAction<ChatItemType>>
    onClick: () => void;
    active: boolean;
    data: ChatItemType;
}
export default ({onClick, active, data}: Props) => {
    return (
        <C.ChatListItem 
            className={active ? 'active' : ''}
            onClick={onClick}
        >
            <C.ChatListAvatar src={data.image} alt="" />
            <C.ChatListLines>
                <C.ChatListLine>
                    <C.ChatListName>{data.title}</C.ChatListName>
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