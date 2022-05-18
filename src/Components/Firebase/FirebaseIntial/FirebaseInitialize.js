import { initializeApp } from "firebase/app";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";


const FirebaseInitial=()=>{
    initializeApp(firebaseConfig);
}


export default FirebaseInitial;