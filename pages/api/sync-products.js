import {syncProductWithContentful} from "../../utils/contentful";

export default async (req, res) => {
    try {
        const products = await syncProductWithContentful();
        res.status(200).json('Success')
    } catch (err) {
        res.status(500).json(err)
    }
}
