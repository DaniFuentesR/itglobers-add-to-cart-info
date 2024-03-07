
import React from "react";

type Props = {
    totalizers: any
}


const Totalizers = ({totalizers}: Props) => {
    
    return (
        <div>
            <p>Tenemos x items en tu compra</p>
            <p>Total: $ {totalizers.value / 100} </p>
        </div>
    )
}


export default Totalizers; 