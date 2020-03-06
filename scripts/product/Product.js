const Product = (productObject) => {
    return `
    <section class="product>
    
            <div class="productInfo">
            <h1> ${productObject.name}</h1>
            
            <p>Bean type: ${productObject.beanType}</p>
            <p>Roast Type: ${productObject.roastType}</p>
            <p>Price: ${productObject.price}</p>
        </div>
             </section>
     `
}

export default Product