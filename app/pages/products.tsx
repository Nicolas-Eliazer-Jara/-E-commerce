import { useEffect, useReducer, useState } from "react";
import { cardReducer } from "../reducers/cardReducers";
import Product from "@/app/types/card";


export default function Products () {
    const [product, setProduct] = useState<Product[]>([]);
    const [state, dispatch] = useReducer(cardReducer, []);
  
  useEffect(() => {
      async function fetchProduc() {
        const rest = await fetch("https://fakestoreapi.com/products");
        const data = await rest.json();
        setProduct(data);
      }
      fetchProduc();
    }, []);

    return{
       product,state, dispatch,
    }
}