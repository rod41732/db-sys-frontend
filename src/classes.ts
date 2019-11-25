// import { Product } from './models';

// export class ProductDTO implements Product {
//     ProdID: number;    
//     Name: string;
//     DefaultPrice?: number;
//     AmountInStock?: number;
//     Image?: string;
//     Type?: string;

//     // data from post API or database
//     constructor({
//         ProductID = -1,
//         ProductName = '',
//         AmountInStock = 0,
//         DefaultPrice = 0,
//         ProductType = 'Beverage',
//         Image = '',
//     })  {
//         this.ProdID = ProductID;
//         this.ProdName = ProductName;
//         this.DefaultPrice = DefaultPrice;
//         this.AmountInStock = AmountInStock;
//         this.Image = Image;
//         thisProdType = ProductType;
//     } 

//     static fromProduct(product: Product): ProductDTO {
//         let newProd = new ProductDTO({});
//         for (let key in product)
//             newProd[key] = product[key];
//         return newProd;
//     }

//     // data to post API
//     toPostData() {
//         return {
//             productName: this.ProdName,
//             amountInStock: this.AmountInStock,
//             defaultPrice: this.DefaultPrice,
//             type: thisProdType,
//             image: this.Image,
//         }
//     }

// }