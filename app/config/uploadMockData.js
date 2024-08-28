import { db } from '../config/firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import { products } from '../../data/mockData.js';

const uploadMockData = async () => {
    const productsCollection = collection(db, 'products');
    for (const product of products) {
        try {
            await addDoc(productsCollection, product);
            console.log(`Product ${product.nombre} added successfully`);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    }
};

uploadMockData();
