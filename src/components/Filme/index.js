import './Filme.css';

function Filme(props){
    return(
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    );
};

export default Filme;