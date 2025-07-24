import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBg7weTmbd1nFyQALt8VB8WF_BMF06LnSc",
  authDomain: "tweakcms.firebaseapp.com",
  projectId: "tweakcms",
  storageBucket: "tweakcms.firebasestorage.app",
  messagingSenderId: "700943279439",
  appId: "1:700943279439:web:6e4a7df95bb43a4eb2513a",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app)

export {storage}