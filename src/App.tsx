import { useState } from "react";
import { Navbar } from "./components/Nav/Nav";
import { Vendas } from "./components/vendas/Vendas";
import { Container } from "./style/App";
import { Estoque } from "./components/Estoque/Estoque";
import { Faturamento } from "./components/Faturamento/Faturamento";

export function App() {

  const [componenteChoose, setComponenteChoose] = useState(null);

  const showComponent = (componente: any) => {
    setComponenteChoose(componente)
  }

  return (
    <>
      <Navbar onSelect={showComponent}/>
      <Container>
      {componenteChoose === 'vendas' && <Vendas />}
      {componenteChoose === 'faturamento' && <Faturamento />}
      {componenteChoose === 'estoque' && <Estoque />}
      </Container>
    </>
  )
}

