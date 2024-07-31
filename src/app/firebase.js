
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyDFcv52XzHep_BGbmVvsyTbyBbg8TLsAaY",
 authDomain: "inventory-management-app-b02a9.firebaseapp.com",
 projectId: "inventory-management-app-b02a9",
 storageBucket: "inventory-management-app-b02a9.appspot.com",
 messagingSenderId: "344837761710",
 appId: "G-K4JFTQTESW"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };