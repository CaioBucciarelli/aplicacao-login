import Logo from '../../assets/yescolorido.png'
import { Link } from 'react-router-dom';
import {useState} from 'react'
import {validarSenha} from '../../utils/validadores.jsx'
import './styles.css';

function Login() {

  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])

  const closeCard = () => {
    let sucessoCard = document.querySelector('.login-sucesso')
    sucessoCard.style.display = "none"
  }

  const handleSubmit = async (event) => {
    let sucessoCard = document.querySelector('.login-sucesso')
    let email = document.getElementById('email')
    let emailValue = document.querySelector('#email').value
    let senha = document.getElementById('senha')
    let senhaValue = document.querySelector('#senha').value
    let msgErr = document.querySelector('.msg-erro')

    event.preventDefault();
    if (emailValue == "nome.sobrene@dominio.com.br" && senhaValue == 123456789) {
      setLoading(true)
      sucessoCard.style.display = "flex"
      setLoading(false)
      email.className = "input"
      senha.className = "input"
      msgErr.style.display = "none"
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
    return validarSenha(form.senha)
  }

  const showPasswordNew = () => {
    var inputPassNew = document.getElementById('nova-senha')
    var btnShowPassNew = document.getElementById('btn-nova-senha')

    if (inputPassNew.type === 'password') {
      inputPassNew.setAttribute('type', 'text')
      btnShowPassNew.classList.replace('bi-eye', 'bi-eye-slash')
    } else {
      inputPassNew.setAttribute('type', 'password')
      btnShowPassNew.classList.replace('bi-eye-slash', 'bi-eye')
    }
  }

  const showPasswordConfirm = () => {
    var inputPassConfirm = document.getElementById('confirmar-senha')
    var btnShowPassConfirm = document.getElementById('btn-confirmar-senha')

    if (inputPassConfirm.type === 'password') {
      inputPassConfirm.setAttribute('type', 'text')
      btnShowPassConfirm.classList.replace('bi-eye', 'bi-eye-slash')
    } else {
      inputPassConfirm.setAttribute('type', 'password')
      btnShowPassConfirm.classList.replace('bi-eye-slash', 'bi-eye')
    }
  }

  return (
    <section className='section-redefinir container'>
      <div className='section-redefinir-conteudo'>
        <h1>Redefinição de Senha</h1>
        <form>
          <div className='single-input-login input-senha single-input-redefinir'>
            <div className='single-input'>
              <input required type="password" name="senha" id="nova-senha" className='input' onChange={handleChange}/>
              <label htmlFor="senha">Nova senha*</label>
            </div>
            <i className="bi bi-eye" id='btn-nova-senha' onClick={showPasswordNew}></i>
          </div>
          <div className='single-input-login input-senha single-input-redefinir'>
            <div className='single-input'>
              <input required type="password" name="senha" id="confirmar-senha" className='input' onChange={handleChange}/>
              <label htmlFor="senha">Confirmar senha*</label>
            </div>
            <i className="bi bi-eye" id='btn-confirmar-senha' onClick={showPasswordConfirm}></i>
          </div>
          <button type='submit' className='btn' id="btn" onClick={handleSubmit} disabled={loading === true || !validadorInput()}>Entrar</button>
        </form>
        <Link to="/">Cancelar</Link>
      </div>
    </section>
            //   <div className='msg-erro'>
            //   <img src={BoxImportant} alt="Exclamação vermelha" />
            //   <p>Usuário ou senha incorretos!</p>
            // </div>
  );
}

export default Login;