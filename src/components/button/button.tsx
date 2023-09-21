import { useState } from "react";


interface ButtonFoodProps {
    typeProduct: string;
    numberFood?: number;
    onAddQuantity?: () => void; 
    onExcludeQuantity?: () => void
}

export function ButtonFood({typeProduct} : ButtonFoodProps) {

const [number, setNumber] = useState(0);

function addQuantity() {
    setNumber(number+1);

    console.log(typeProduct)
}

function excludeQuantity() {
    setNumber(number-1);

    if(number == 0) {
        setNumber(0)
    }
}

    return(
        <div>
            <button onClick={excludeQuantity}>-</button> 
            <span>{number}</span>
            <button onClick={addQuantity}>+</button>
       </div>
    );
}