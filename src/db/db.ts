import { initializeApp } from 'firebase/app'
import { getFirestore, getDocs, collection } from 'firebase/firestore'


//Config
import { firebaseConfig } from "../config/firebase";

export class FirebaseDB {
    static instance: any;
    app: any;
    db: any;

    constructor() {
        if (FirebaseDB.instance) return FirebaseDB.instance

        FirebaseDB.instance = this

        this.app= initializeApp(firebaseConfig)
        this.db = getFirestore(this.app)
    }

    async getProducts() {
        try {
            const colData = await getDocs(collection(this.db, "products"))
            const data = colData.docs.map((doc) => ({...doc.data(), id: doc.id}))

            console.log(colData.docs);
            
        } catch (_err) {
            console.info(_err)
        }
    }
}