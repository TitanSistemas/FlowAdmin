// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD2F7pvBAT6dtfa33-qQ0prksgCPFGGLfI",
    authDomain: "flowtv-fc226.firebaseapp.com",
    projectId: "flowtv-fc226",
    storageBucket: "flowtv-fc226.appspot.com",
    messagingSenderId: "587599156895",
    appId: "1:587599156895:web:b06631d730f2bcbac9f4aa",
    measurementId: "G-GL649EH5V3"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando Firestore
export const db = getFirestore(app);

// Inicializando Autenticação
export const auth = getAuth(app);
