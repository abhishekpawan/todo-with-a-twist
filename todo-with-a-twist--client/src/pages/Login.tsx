import Button from "../components/Button/Button";

const Login = () => {
  return (
    <>
      <div className="login__header">
        <h1>Todo With a Twist</h1>
        <div className="login__btn-group">
          <Button text="Login" isActive={false} onClick={() => {}} />
          <Button text="signup" isActive={false} onClick={() => {}} />
        </div>
      </div>
    </>
  );
};

export default Login;
