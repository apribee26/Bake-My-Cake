export type Gift = {
    id?: number;
    name?: string;
    price?: string;
    imageURL?: string;
    description?:string;
    
}

export const Gifts: Gift[] = [
    { id: 1, name: 'Merry/Happpy 4-pack',price:'9.50', description:'Six warm,cookies pre-wrapped in a Merry/Happy box sleeve and delivered to your friends and family.',imageURL:'../../assets/images/4cookiesandBrowniesjpg.jpg'},
    { id: 2, name: 'Naughty/Nice 8-pack',price:'17.50', description:'Which list are they on? Give a box of twelve cookies wrapped in our cheeky Naughty/Nice box sleeve.'},
    { id: 4, name: 'Sids Present 12-pack',price:'31.00',description:'Twelve warm, brownies or cookies of your choosing with a gift wrap and tag box sleeve. Easy peasy!'},
    { id: 4, name: 'Give Cookies 10"Cake', price:'32.00', description:'The gift that keeps on giving. One Classic flavor, your choice of decorative icing, and an optional message applied with buttercream icing and wrapped with a holiday message. Up to 8 servings.'}
];

export type Dessert = {
    id?: number;
    name?: string;
    price?: string;
    imageURL?: string;
    description?:string;
}
export const Desserts: Dessert[] = [
    { id: 1, name: 'Merry/Happpy 4-pack',price:'9.50', description:'Six warm,cookies pre-wrapped in a Merry/Happy box sleeve and delivered to your friends and family.'},
    { id: 2, name: 'Naughty/Nice 8-pack',price:'17.50', description:'Which list are they on? Give a box of twelve cookies wrapped in our cheeky Naughty/Nice box sleeve.'},
    { id: 4, name: 'Sids Present 12-pack',price:'31.00',description:'Twelve warm, brownies or cookies of your choosing with a gift wrap and tag box sleeve. Easy peasy!'},
    { id: 4, name: 'Give Cookies 10"Cake', price:'32.00', description:'The gift that keeps on giving. One Classic flavor, your choice of decorative icing, and an optional message applied with buttercream icing and wrapped with a holiday message. Up to 8 servings.'},
    {id: 5, name:''}
];