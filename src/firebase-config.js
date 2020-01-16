const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
        apiKey: "AIzaSyCNxmSHt6mUmZOIJX5kmzCiyaGHF7ZUmb4",
    authDomain: "website-react1-31ace.firebaseapp.com",
    databaseURL: "https://website-react1-31ace.firebaseio.com",
    projectId: "website-react1-31ace",
    storageBucket: "website-react1-31ace.appspot.com",
    messagingSenderId: "411715394591",
    appId: "1:411715394591:web:ff1cee0ff7119bc9eb492a"
      }
      
        const app = firebase.initializeApp(FirebaseConfig)
        const config = Rebase.createClass(app.database())

        export const storage = app.storage()
        export const auth = app.auth()
     
     export default config