import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { getFirestore, setDoc, collection, doc, getDocs } from 'firebase/firestore';
import { firebaseConfig } from "./firebaseConfig";

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export default {
    fbPopup: async () => {
        // const provider = new firebase.auth.FacebookAuthProvider();
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
            console.log('ta entrando aqui -----' + u.id)
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
    getContactList: async (userId:any) => {
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
            console.log(usersData);
            console.log(list);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
        return list;
    }
}