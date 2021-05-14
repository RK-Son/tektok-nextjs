import {createClient} from 'contentful-management'

const spaceId = 'td050h71liyd'
const accessToken = 'oQERBXdVJqWyCV0Hw9fSZIch-WVSmZCzFaGHj0_9t04'
const accessTokenContentfulManament = 'CFPAT-IoMrqwL1zslLysDAmRDsOlFG_aNGeXH1MCLmDnktqg0'
const environmentId = 'master'


const getEnvironment = async () => {
    const client = createClient({
        accessToken: accessTokenContentfulManament,
    })
    const space = await client.getSpace(spaceId)
    return space.getEnvironment(environmentId)
}

export const syncProductWithContentful = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()

    const environment = await getEnvironment()
    products.forEach(product => {
        environment.createEntry('product', {
            fields: {
                id: {
                    "en-US": product.id
                },
                title: {
                    "en-US": product.title
                },
                description: {
                    "en-US": product.description
                },
                price: {
                    "en-US": product.price
                },
                image: {
                    "en-US": product.image
                },
            }
        })
    })
}

export const getProducts = async () => {
    const environment = await getEnvironment();
    const products = (await environment.getEntries({content_type: 'product'}))?.items
    return products.map(product => {
        const fields = product.fields;
        return {
            id: fields.id['en-US'],
            title: fields.title['en-US'],
            price: fields.price['en-US'],
            description: fields.description['en-US'],
            image: fields.image['en-US'],
        }
    });
}
