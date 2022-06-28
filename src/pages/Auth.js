import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { start } from "../redux/authSlice";

export default function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(start({
      email: formData.get('email'),
      password: formData.get('password'),
      method: event.nativeEvent.submitter.innerText === "Sign up" ? 'signup' : 'signin',
    }));

    navigate('/');
  }


  return (
    <form onSubmit={onAuthStart}>
      <h1 className="Auth-title">Welcome</h1>
      <div className="Auth">
        <label>
          <input type="email" placeholder="E-mail" name="email" required />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            minLength="6"
          />
        </label>
      </div>

      <div className="Button-center">
        <button className="Button">Sign in</button>
        <button className="Button">Sign up</button>
      </div>
    </form>
  );
}
