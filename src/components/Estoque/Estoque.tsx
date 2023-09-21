import { ButtonArea, EstoqueFood } from "./style";
import { ButtonEstoque } from "../buttonEstoque/ButtonEstoque";
import { useState } from "react";

interface EstoqueInputProps {
    value: number;
}

export function Estoque(props: EstoqueInputProps) {

    const [value, setValue] = useState('');

    function captureValue(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
        if(event.target.name == "coração") {
            console.log('ok coração')
        } else (
            console.log('not at all')
        )
        console.log(value)
    }


    return(
        <>
            <h1>Adicionar ao estoque</h1>
            <EstoqueFood>
                <div>
                  <h3>Coração</h3>
                  <h3>Carne</h3>
                  <h3>Queijo</h3>
                  <h3>Linguiça</h3>
                </div>
                <div>
                  <input type="number" placeholder="Qtd." name="coração" onChange={captureValue}></input>
                  <input type="number" placeholder="Qtd." name="carne" onChange={captureValue}></input>
                  <input type="number" placeholder="Qtd." name="queijo" onChange={captureValue}></input>
                  <input type="number" placeholder="Qtd." name="linguiça" onChange={captureValue}></input>
                </div>

                
            </EstoqueFood>
            <ButtonArea>
                <ButtonEstoque textButton="Adicionar" valueNumber={value}></ButtonEstoque>
            </ButtonArea>
            <h1>Quantidade</h1>
            <EstoqueFood>
                <div>
                    <span>{value}</span>
                </div>
            </EstoqueFood>
        </>
    );
}