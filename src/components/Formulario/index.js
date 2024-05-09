import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const generos = ["Ação", "Comédia", "Drama", "Terror", "Animação"];

  const [nome, setNome] = useState("");
  const [nota, setNota] = useState("");
  const [imagem, setImagem] = useState("");
  const [genero, setGenero] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoFilmeCadastrado({
      nome,
      nota,
      imagem,
      genero,
    });
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Filme</h2>
        <CampoTexto
          obrigatorio={true}
          label="Filme"
          placeholder="Digite o nome do seu filme"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Nota IMDb"
          placeholder="Digite a nota do filme"
          valor={nota}
          aoAlterado={(valor) => setNota(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem do filme"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Gênero"
          itens={generos}
          obrigatorio={true}
          valor={genero}
          aoAlterado={(valor) => setGenero(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
