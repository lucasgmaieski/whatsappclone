import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

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
    }
}


const app = initializeApp(firebaseConfig);

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // The signed-in user info.
//     const user = result.user;

//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     const credential = FacebookAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;

//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = FacebookAuthProvider.credentialFromError(error);

//     // ...
//   });