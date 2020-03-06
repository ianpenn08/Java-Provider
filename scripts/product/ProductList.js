import Product from "./Product.js"
import {useProducts} from "./productDataProvider.js"

const contentTarget = document.querySelector(".products")

const productsList = () => {
    const productsObjectsArray = useProducts()

    for (const productsObject of productsObjectsArray) {
        const productsHTMLRep = Product(productsObject)

        contentTarget.innerHTML += productsHTMLRep
    }
}

export default productsList