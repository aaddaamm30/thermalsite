import firebase from "firebase/compat/app";
import { getDatabase, ref, set, child, update, remove } from "firebase/database";

const firebaseConfig = {}; // REMOVED

const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase(app, 'https://thermalprinter-b8ac5-default-rtdb.firebaseio.com/');

class FirebaseDataService {
    getAll(){
        return db;
    }

    addNewProject(project){
        set(ref(db, 'projects/' + Date.now()), {
            projectIdea: project
        }).then(()=>{
            console.log("Update good");
        }).catch((error)=>{
            console.log("ERROR " + error);
        });
    }

    addNewContentLink(mediaLink){
        set(ref(db, 'media/' + Date.now()), {
            mediaLink: mediaLink
        }).then(()=>{
            console.log("Update good");
        }).catch((error)=>{
            console.log("ERROR " + error);
        });
    }
}

export default new FirebaseDataService();