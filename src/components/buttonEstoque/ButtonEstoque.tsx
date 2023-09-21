import { ButtonAddEstoque } from "./style";

interface ButtonEstoqueProps {
    textButton: string;
    valueNumber: string;
}

export function ButtonEstoque(props: ButtonEstoqueProps) {

    const {textButton} = props;
    const {valueNumber} = props;

    return(
        <>
            <ButtonAddEstoque onClick={() => console.log(valueNumber)}>{textButton}</ButtonAddEstoque>
        </>
    );
}