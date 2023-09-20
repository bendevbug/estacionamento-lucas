import { Comida, ComidaConsumo } from "./style";
import { ButtonFood } from "../button/button";

export function Vendas() {

    return(
        <>  
            <h1>Vendas</h1>
            <Comida>
                <div>
                    <p>Espetinho de coração</p>
                    <p>Espetinho de carne</p>
                    <p>Espetinho de queijo</p>
                    <p>Espetinho de linguiça</p>
                </div>
                <div>
                    <ButtonFood typeProduct='coração' />
                    <ButtonFood typeProduct='carne' />
                    <ButtonFood typeProduct='queijo'/>
                    <ButtonFood typeProduct='linguiça'/>
                </div>
            </Comida>
            <h1>Consumo</h1>
            <ComidaConsumo>
                <div>
                    <p>Espetinho de coração</p>
                    <p>Espetinho de carne</p>
                    <p>Espetinho de queijo</p>
                    <p>Espetinho de linguiça</p>
                </div>
                <div>
                    <ButtonFood typeProduct='coração consumo' />
                    <ButtonFood typeProduct='carne consumo' />
                    <ButtonFood typeProduct='queijo consumo'/>
                    <ButtonFood typeProduct='linguiça consumo'/>
                </div>
            </ComidaConsumo>
        </>
    );
}