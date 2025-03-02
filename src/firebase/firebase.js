
import { initializeApp } from "firebase/app";

import { getFirestore , 
         getDocs, 
         collection, 
         getDoc , 
         doc , 
         addDoc ,
         where , 
         query, 
         addDoc} 
         from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBcRnY5v_aPL8Zprkk2FgXp1Eg7KKoXaxo",
  authDomain: "geronimocoderreact.firebaseapp.com",
  projectId: "geronimocoderreact",
  storageBucket: "geronimocoderreact.firebasestorage.app",
  messagingSenderId: "841540145692",
  appId: "1:841540145692:web:83c914d22aa4c4727405d9",
  measurementId: "G-YYBHCZD73H"
};

const app = initializeApp(firebaseConfig);

const db= getFirestore(app);


//funcion para traer los productos de la database desde firebase
export async function getProducts(){
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];
  querySnapshot.forEach(doc => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
}


//funcion para traer un producto por id
export async function getProduct(id){
  const documentRef = doc(db, "products", id);

  try {
    const snapshot = await getDoc(documentRef);
    if(snapshot.exists()){
      return snapshot.data();
    } else {
    console.log("there is no document!");}
  } catch (error) {
    console.log("was occurred an error", error);
 }
}




//function para traer los productos por categoría
export async function getCategory(catId) {
  try {
    const filteredQuery = query(collection(db, 'products'), where('category', '==', catId));

    const querySnapshot = await getDocs(filteredQuery);

    if (querySnapshot.size !== 0) {
      return querySnapshot.docs.map((docu) => ({
        id: docu.id,
        ...docu.data(),
      }));
    }

    console.log('No hay productos!');
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}



//funcion para crear una orden de pedido


export async function createOrder(order){ 
  const orderCollection = ( db ,'orders')
  try{
    const docRef = await addDoc(ordersCollection , order);
    return order.id;
  }catch (error){
    console.log("Hubo un error" , error)
  }
  
}
