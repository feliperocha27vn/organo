import './Filme.css';

function Filme(props){
    return(
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <p>Utilizamos o props para poder definir as cores de cada genero</p>
        </section>
    );
};

export default Filme;