import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Filme from "./components/Filme";

function App() {
  const generos = [
    {
      nome: "Ação",
      corPrimaria: "#57C278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Comédia",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Drama",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Terror",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Animação",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
  ];

  const [filme, setFilme] = useState([]);

  const aoNovoFilmeAdicionado = (filme) => {
    console.log(filme);
    setFilme([...filme, filme]);
    // ele resgata os colaboradores antigos e salva um novo
  };

  return (
    <div className="App">
      <Banner />
      <Formulario aoFilmeCadastrado={(filme) => aoNovoFilmeAdicionado(filme)} />
      {generos.map((genero) => (
        <Filme
          key={genero.nome}
          nome={genero.nome}
          corPrimaria={genero.corPrimaria}
          corSecundaria={genero.corSecundaria}
        />
      ))}
    </div>
  );
}

export default App;
