export type Product = {
    id: number;
    titleKey:string;
    image:string;
    price:number;
    category:string;
    rating:string;
    descriptionKey:string;
};

export type Action = 
|{type:'add'; payload:Product}
|{type:'delete'; payload:number;}

export default Product
export default Action
