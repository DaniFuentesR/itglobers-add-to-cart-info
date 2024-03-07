import React from "react";
import {useProduct} from "vtex.product-context"; 
import {useOrderForm} from "vtex.order-manager/OrderForm";
import ButtonGroup from "./ButtonGroup";
// import Totalizers from "./Totalizers";
import ProductGroup from "./ProductGroup";

const AddToCartInfo = () => {

    const productInfo = useProduct(); 
    const {orderForm:{
        items, 
        totalizers
    }} = useOrderForm(); 
    
    console.log("Este producto tiene esta información: ", productInfo);
    console.log("Esta es mi info de la orden: ", items, totalizers);
   
    
    
    return(
    <>
        <ProductGroup products={items} />
        <div>
        
            <p>Tenemos {items?.length} items en tu compra</p>
            <p>Total: $ {totalizers[0]?.value / 100} </p>
        </div>
        
        <ButtonGroup/> 
    </>
    )
}



export default AddToCartInfo