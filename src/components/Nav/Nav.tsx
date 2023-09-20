import { Header } from "../../style/App";


type OnSelectCallback = (component: string) => void;

interface NavbarProps {
  onSelect: OnSelectCallback;
}


export function Navbar({ onSelect }: NavbarProps) {

    return(
        <Header>
            <div>
                <button value="vendas" onClick={() => onSelect('vendas')}>Vendas</button>
                <button value="estoque" onClick={() => onSelect('estoque')}>Estoque</button>
                <button value="faturamento" onClick={() => onSelect('faturamento')}>Faturamento</button>
            </div>
        </Header>
    );
}