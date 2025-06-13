export type Product = {
    id: number;
    title:string;
    image:string;
    price:number;

};

export type Action = 
|{type:'add'; payload:Product}
|{type:'delete'; payload:number;}

export default Product
export default Action
