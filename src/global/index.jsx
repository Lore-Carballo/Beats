import { useEffect } from "react";
import { getFirestore } from "../firebase/client"

export const Content = () => {
    return (
        <div className="content">
            <h1>Bienvenid@ a <span>LogoIpsum</span></h1>
            <img src="/img/hello.gif" alt="Hello" />
        </div>
    )
}

/*::::::::::::::::::::::::::::::::::: FIRESTORE ::::::::::::::::::::::::::::::::::::::::*/
export async function getProducts() {
    const DB = getFirestore(); //Conexión con DB
    const COLLECTION = DB.collection("Beats"); //Conexión con la collection
    const data = await COLLECTION.get();
    let items = data.docs.map((doc) => { return { ...doc.data(), id: doc.id }});
    // console.log('items: ', items);
    return items;
}

export async function getProductDetail(id) {
    const products = await getProducts();
    const product = products.find(element => element.id === id);
    return product;
}

export async function getCategories() {
    const DB = getFirestore(); //Conexión con DB
    const COLLECTION = DB.collection("BeatsCategories"); //Conexión con la collection
    const data = await COLLECTION.get();
    let categories = data.docs.map((doc) => { return { ...doc.data(), id: doc.id }});
    // console.log('categories: ', categories);
    return categories;
}

export async function getCategoryDetail(id) {
    const categories = await getCategories();
    const category = categories.find(element => element.id === id);
    return category;
}

export async function getProductsByCategory(category) {
    const products = await getProducts();
    const filteredProducts = products.filter(element => element.category === category);
    return filteredProducts;
}