import React from "react";

type Props = {
    products: any
}

const ProductGroup = ({products}:Props) => {
    console.log("Mis productos en productGroup son: ", products);
    
    return(
        <>

            {products.map((product: any, index: number) => {

                return(
                    <div key={index}>
                        <div>
                            <img src={product.imageUrls.at1x} alt="" />
                        </div>
                        <div>
                            <p>{product.name}</p>
                            <p>{product.id}</p>
                            <p>${product.price/100}</p>
                            <p>Qty: {product.quantity}</p>
                        </div>
                    </div>
                )



                })
            }
        </>
    )
}


export default ProductGroup; 