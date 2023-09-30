import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { getFirestore, setDoc, collection, doc, getDocs, addDoc, updateDoc, arrayUnion, onSnapshot, getDoc } from 'firebase/firestore';
import { firebaseConfig } from "./firebaseConfig";

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export default {
    fbPopup: async () => {
        const resultFull: any  = {}
        const provider = new FacebookAuthProvider();
        let result = await signInWithPopup(auth, provider);
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
        try {
            const response = await fetch(`https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`);
            if (response.ok) {
                const imageProfile = response.url;
                console.log('devolvendo imagem: ');
                console.log(imageProfile)
                resultFull.imageProfile = imageProfile;
                resultFull.result = result;
            } else {
                console.error('Erro na requisição da imagem de perfil.');
            }
        } catch (error) {
            console.error('Ocorreu um erro ao buscar a imagem de perfil:', error);
        }
    
        return resultFull;
    },
    addUser: async (u: any) => {
        if(u) {
            const userDocRef = doc(db, 'users', u.id);
            const userData = { name: u.name, avatar: u.avatar};
            try {
                await setDoc(userDocRef, userData, { merge: true });
            } catch (error) {
                console.log('erro:' + error);
            }
        } else {
            console.log('U esta indefinido');
        }

    },
    getContactList: async (userId:string) => {
        let list: any = [];

        try {
            const usersCollection = collection(db, 'users');
            const usersSnapshot = await getDocs(usersCollection);
        
            const usersData = usersSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            usersData.forEach((result: any) => {
                if(result.id !== userId) {
                    list.push({
                        id: result.id,
                        name: result.name,
                        avatar: result.avatar
                    })
                }
            })
            // Agora você tem os dados dos usuários em usersData
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
        return list;
    },
    addNewChat: async (user:UserType, user2:UserType) => {
        if(user && user2) {
            try {
                    const chatsCollection = collection(db, "chats");
                    // Adicione o documento à coleção "chats"
                    let newChat = await addDoc(chatsCollection, {
                        messages: [],
                        users: [user.id, user2.id]
                    });

                    const usuarioRef = doc(db, "users", user.id);
                    // Atualize o array "chats" usando arrayUnion
                    await updateDoc(usuarioRef, {
                        chats: arrayUnion({
                            chatId: newChat.id,
                            title: user2.name,
                            image: user2.avatar,
                            with: user2.id
                        }),
                    });

                    const usuario2Ref = doc(db, "users", user2.id);
                    // Atualize o array "chats" usando arrayUnion
                    await updateDoc(usuario2Ref, {
                        chats: arrayUnion({
                            chatId: newChat.id,
                            title: user.name,
                            image: user.avatar,
                            with: user.id
                        }),
                    });
                    
            } catch (error) {
                console.error('Erro ao buscar chats:', error);
            }
        }
    },
    onChatList: (userId: string, setChatlist: React.Dispatch<React.SetStateAction<ChatItemType[]>>) => {
        const userDocRef = doc(db, 'users', userId);
        return onSnapshot(userDocRef, (doc) => {
            let data = doc.data();
            if(data) {
                if(data.chats) {
                    let chats = [...data.chats];

                    chats.sort((a, b) => {
                        if (a.lastMessageDate === undefined) {
                            return -1;
                        }
                        if (b.lastMessageDate === undefined) {
                            return -1;
                        }

                        if (a.lastMessageDate.seconds < b.lastMessageDate.seconds) {
                            return 1;
                        } else {
                            return -1;
                        }
                    });
                    
                    setChatlist(data.chats);
                }
            }
        });
    },
    onChatContent: (chatId: string, setList: React.Dispatch<React.SetStateAction<MessageItemType[]>>, setUsers: React.Dispatch<React.SetStateAction<UserType[]>> ) => {
        const chatDocRef = doc(db, 'chats', chatId);
        return onSnapshot(chatDocRef, (doc) => {
            let data = doc.data();
            if(data) {
                if(data.messages) {
                    setList(data.messages);
                    setUsers(data.users);
                }
            }
        });
    },
    sendMessage: async (chatData: any, userId: string, type: string, body: string, users: any) => {
        let now = new Date();

        const usuarioRef = doc(db, "chats", chatData.chatId);
        // Atualize o array "messages" usando arrayUnion
        updateDoc(usuarioRef, {
            messages: arrayUnion({
                type,
                author: userId,
                body,
                date: now
            }),
        });

        for(let i in users) {
            const docRef = doc(db, "users", users[i]);
            let docSnap = await getDoc(docRef);
            let uData = docSnap.data();
            if(uData) {
                if (uData.chats) {
                    let chats = [...uData.chats];

                    for (let e in chats) {
                        if (chats[e].chatId == chatData.chatId) {
                            chats[e].lastMessage = body;
                            chats[e].lastMessageDate = now;
                        }
                    }

                    await updateDoc(docRef, {
                        chats
                    });
                }
            }
        }
    }
}