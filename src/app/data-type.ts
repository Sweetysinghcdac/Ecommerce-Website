export interface SignUp{
    name:string,
    password: string,
    email:string
}
export interface login{
    password: string,
    email:string
}

export interface product{
    name: string,
    price: number,
    catagory:string,
    color: string,
    description: string,
    image:string,
    id:number
}