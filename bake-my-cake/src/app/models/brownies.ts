export type Brownie = {
    id?: number;
    name?: string;
    price?: string;
    imageURL?: string;
    description?:string;
}
export const Brownies: Brownie[] = [
    { id: 1, name: 'Merry Brownie',price:'4.95', description:'This super chocolaty brownie (made with black cocoa) is packed with sprinkles and crushed candy canes.'},
    { id: 2, name: 'Cookie Monster Brownie',price:'4.95', description:'Oreo cookies, fudgy brownies, chunks of chocolate chip cookie, and cookies and cream frosting are truly and impressive combination.'},
    { id: 3, name: 'Vegan Chocolate Brownie',price:'4.95',description:'Our vegan take on the “classic brownie” has a sweet, rich chocolaty taste and satisfying chewy texture, all without eggs or butter.'},
    { id: 4, name: 'Matcha Brownie',price:'4.95',description:'You will these enjoy moist, rich, dense treats, full of intense matcha flavor.'},
];