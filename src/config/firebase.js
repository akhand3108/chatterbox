import firebase from "firebase/app"
import "firebase/firestore"

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyDcPqT5G2EsILKksKTRuvtaD8fU17SF_dY",
  authDomain: "whatsup-19876.firebaseapp.com",
  projectId: "whatsup-19876",
  storageBucket: "whatsup-19876.appspot.com",
  messagingSenderId: "158780517389",
  appId: "1:158780517389:web:0b1965d0daec068e513944",
})

const db = firebaseapp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
