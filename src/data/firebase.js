import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import i18next from "i18next";

const firebaseConfig = {
  apiKey: "AIzaSyCFWWh6LG1e3KyFUuH4ez_5s9iew13jr6I",
  authDomain: "gherbel-d3c67.firebaseapp.com",
  projectId: "gherbel-d3c67",
  storageBucket: "gherbel-d3c67.appspot.com",
  messagingSenderId: "191630025328",
  appId: "1:191630025328:web:d6117d43a37f31086c0ab5",
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to fetch data from Firebase
const fetchData = async () => {
  try {
    const langDocument = i18next.language === "ar" ? "ar" : "en";
    const documentRef = doc(db, "judiciary", langDocument);
    const docSnap = await getDoc(documentRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Fetched data:", data);
      // Set your component's state with the fetched data
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

// Call the fetchData function to retrieve data from Firebase
fetchData();
