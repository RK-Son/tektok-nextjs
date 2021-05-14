import {getProducts} from "../../utils/contentful";

export default async (req, res) => {
    // const products = await getProducts({limit: 15});
    // res.status(200).json({products: products})
    await new Promise(resolve => setTimeout(() => res.status(200).json('Done'), 12000))
}
