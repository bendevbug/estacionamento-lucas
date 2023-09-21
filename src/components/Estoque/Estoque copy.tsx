import { useState } from "react";
import { ButtonFood } from "../button/button";
import { EstoqueFood } from "./style";

const estoqueProducts = [
    "coração",
    "carne",
    "queijo",
    "linguiça"
]

export function Estoque() {

    const [quantity, setQuantity] = useState(0);

    const addQuantity = () => {
        setQuantity(quantity + 1);
      };
    
      const excludeQuantity = () => {
        if (quantity > 0) {
          setQuantity(quantity - 1);
        }
      };
    

    return(
        <>
            <h1>Adicionar ao estoque</h1>
            <EstoqueFood>
                <div>
                    {estoqueProducts.map((product, index) => (
                        <p key={index}>Espetinho de {product}</p>
                    ))}
                </div>
                <div>
                {estoqueProducts.map((product, index) => (
                    <ButtonFood
                    key={index}
                    typeProduct={product}
                    numberFood={quantity} 
                    onAddQuantity={addQuantity}  
                    onExcludeQuantity={excludeQuantity}  
                    />
                ))}
                </div>
            </EstoqueFood>
            <h1>Quantidade</h1>
            <EstoqueFood>
                <div>
                {estoqueProducts.map((product, index) => (
                    <p key={index}>Espetinho de {product}</p>
                ))}
                </div>
                <div>
                {estoqueProducts.map((product, index) => (
                    <span key={index}>{quantity}</span>
                ))}
                </div>
            </EstoqueFood>
        </>
    );
}