exports.cartpage=class cartPage{

    constructor(page){
        this.page=page;
        this.noofproducts='//tbody[@id="tbodyid"]/tr/td[2]'
    }
    async checkProduct(productname){
        const productInCart= await this.page.$$(this.noofproducts)
        for(const product of productInCart){
                console.log(await product.textContent());

                if(productname===await product.textContent());
                return true;
                break
        }
    }
}
//chat gpt code
// exports.cartpage = class CartPage {

//     constructor(page) {
//         this.page = page;
//         this.noofproducts = '//tbody[@id="tbodyid"]/tr/td[2]';
//     }

//     async checkProduct(productname) {
//         const productInCart = await this.page.$$(this.noofproducts);

//         for (const product of productInCart) {
//             const productText = await product.textContent();
//             console.log(productText);

//             if (productname === productText.trim()) {
//                 return true;
//             }
//         }

//         return false;
//     }
// }











