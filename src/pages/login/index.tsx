import Logo from '../../assets/yeslogoazul.png';
import BoxImportant from '../../assets/Box-Important.png';
import VetorX from '../../assets/X.svg';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import {validarEmail, validarSenha} from '../../utils/validadores.jsx'
import './styles.css';

function Login() {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])

  const closeCard = () => {
    let sucessoCard = document.querySelector('.card-sucesso')
    sucessoCard.style.display = "none"
  }

  const handleSubmit = async (event) => {
    let sucessoCard = document.querySelector('.card-sucesso')
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    let msgErr = document.querySelector('.msg-erro')

    event.preventDefault();
    if (email.value == "nome.sobrene@dominio.com.br" && senha.value == 123456789) {
      setLoading(true)
      sucessoCard.style.display = "flex"
      email.className = "input"
      senha.className = "input"
      msgErr.style.display = "none"
      setLoading(false)
    }
    else {
      email.className = "input input-err"
      senha.className = "input input-err"
      msgErr.style.display = "flex"
    }
  }
  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.senha)
  }

  const showPassword = () => {
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if (inputPass.type === 'password') {
      inputPass.setAttribute('type', 'text')
      btnShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    } else {
      inputPass.setAttribute('type', 'password')
      btnShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    }
  }

  return (
    <section className='section-login container'>
      <div className='section-login-conteudo'>
        <h1>Autenticação</h1>
        <form action="">
          <div className='single-input single-input-login'>
            <input required type="text" name="email" id="email" className='input' onChange={handleChange}/>
            <label htmlFor="email">E-mail</label>
          </div>
          <div className='single-input-login input-senha'>
            <div className='single-input'>
              <input required type="password" name="senha" id="senha" className='input' onChange={handleChange}/>
              <label htmlFor="senha">Senha</label>
            </div>
            <i className="bi bi-eye" id='btn-senha' onClick={showPassword}></i>
          </div>
          <div className='msg-erro'>
            <img src={BoxImportant} alt="Exclamação vermelha" />
            <p>Usuário ou senha incorretos!</p>
          </div>
          <button type='submit' className='btn' id="btn" onClick={handleSubmit} disabled={loading === true || !validadorInput()}>Entrar</button>
        </form>
        <Link to="/recuperar">Esqueci minha senha</Link>
        <p>Ao efetuar login, declaro estar de acordo com a <span>Política de Privacidade</span> e o <span>Termo de Uso</span> da Plataforma</p>
      </div>
      <div>
        <img src={Logo} alt="Logo" /> 
      </div>
      <div className='card-sucesso'>
        <img src={BoxImportant} alt="Exclamação verde" />
        <p>Login feito com sucesso!</p>
        <button onClick={closeCard}><img src={VetorX} alt="X" /></button>
      </div>
    </section>
  );
}

export default Login;
