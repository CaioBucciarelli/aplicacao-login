import Logo from '../../assets/yescolorido.png'
import { Link } from 'react-router-dom';
import {useState} from 'react'
import {validarEmail} from '../../utils/validadores.jsx'
import './styles.css';

function Recuperar() {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault();
    let msg = document.querySelector('.msg-email')
    msg.style.display = "flex"
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarEmail(form.email)
  }

  return (
    <section className='section-recuperacao container'>
      <div className='section-recuperacao-conteudo'>
        <h1>Recuperação de Senha</h1>
        <p>Informe o  E-mail do usuário do qual deseja recuperar a senha</p>
        <div className='single-input single-input-recuperacao'>
          <input required type="text" name="email" id="email" className='input' onChange={handleChange}/>
          <label htmlFor="email">E-mail</label>
        </div>
        <p>Será enviado um e-mail para o endereço cadastrado, contendo o link de redefinição de senha</p>
        <button type='submit' className='btn' id="btn" onClick={handleSubmit} disabled={loading === true || !validadorInput()}>Enviar</button>
        <Link to="/">Cancelar</Link>
      </div>
      <div className='msg-email'>
        <div className='msg-email-logo'>
          <img src={Logo} alt="" />
        </div>
        <div className='msg-email-conteudo'>
          <h1>Olá, [Nome do usuário]</h1>
          <p>Recebemos um pedido de recuperação de acesso ao [Nome do Sistema]. Clique no botão abaixo para criar uma nova senha:</p>
          <Link to="/redefinir" className='link-cancelar'>Criar nova senha</Link>
          <span>[Dia/Mês/Ano] | [HH:MM]</span>
          <p>Se você não fez essa solicitação, desconsidere esta mensagem. Mas fique tranquilo, pois estamos aqui para manter sua conta segura. </p>
          <small>Você não precisa responder este e-mail, pois este é um e-mail automático</small>
        </div>
      </div>
    </section>
  );
}

export default Recuperar;
