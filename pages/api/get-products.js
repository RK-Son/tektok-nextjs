import {getProducts} from "../../utils/contentful";

export default async (req, res) => {
    const products = await getProducts();
    products.forEach(product => {
        console.log(product.fields)
    })
    res.status(200).json({products: products})
}
