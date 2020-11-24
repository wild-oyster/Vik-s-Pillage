import viking from '../../assets/communs/viking.jpg';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className='global-container-a'>
      <div className='main-container-a'>
        <img id='viking' src={viking} alt='v' />
        <div className='signIn-container'>
          <h1>Sign in</h1>
          <form>
            <div className='form'>
              <label for='email'>Enter your email: </label>
              <input type='email' name='email' id='email' required />
            </div>
            <div className='form'>
              <label for='name'>Enter your password: </label>
              <input type='text' name='password' id='password' required />
            </div>
          </form>
          <button className='btn-submit-form' type='submit'>
            sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
