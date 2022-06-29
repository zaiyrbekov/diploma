import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { start } from "../redux/authSlice";

export default function Auth() {
  const dispatch = useDispatch();
  const { error, localId } = useSelector(store => store.auth);
  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(start({
      email: formData.get('email'),
      password: formData.get('password'),
      method: event.nativeEvent.submitter.innerText === "Sign up" ? 'signup' : 'signin',
    }));
  }

  if (localId !== null) {
    navigate('/');
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <strong style={{ color: "red" }}>{error}</strong>
  }

  return (
    <form onSubmit={onAuthStart}>
      {errorOutput}
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
