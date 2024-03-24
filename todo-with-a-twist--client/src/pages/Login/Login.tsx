import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { email_regex, password_regex } from "../../lib/util/constants/regex";

type Inputs = {
  name?: string;
  email: string;
  password: string;
};

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [isLoginState, setIsLoginState] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (loginData) => {
    console.log(loginData);
  };
  return (
    <div className="login">
      <div className="login__header">
        <h1>Todo With a Twist</h1>
        <div className="login__btn-group">
          <Button
            type="underline"
            text="Login"
            isActive={isLoginState}
            onClick={() => setIsLoginState(!isLoginState)}
          />
          <Button
            type="underline"
            text="signup"
            isActive={!isLoginState}
            onClick={() => setIsLoginState(!isLoginState)}
          />
        </div>
        <h3 className="login__title">Log in to your Account</h3>
      </div>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        {!isLoginState && (
          <div className="login__form__input">
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              {...register("name", {
                required: !isLoginState,
              })}
            />
            <p role="alert">
              {errors.name && <span>Please enter a valid NAme!</span>}
            </p>
          </div>
        )}
        <div className="login__form__input">
          <input
            type="text"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: email_regex,
            })}
          />
          <p role="alert">
            {errors.email && <span>Please enter a valid email ID!</span>}
          </p>
        </div>

        <div className="login__form__input">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              pattern: password_regex,
            })}
          />
          <p role="alert">
            {errors.password && (
              <span>
                password should be min 6 character with MIX of Uppercase,
                lowercase, digits!
              </span>
            )}
          </p>
          <a className="login__form__password-eye">
            {passwordVisible ? (
              <AiFillEyeInvisible
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
            ) : (
              <AiFillEye onClick={() => setPasswordVisible(!passwordVisible)} />
            )}
          </a>
        </div>

        <Button
          type="box"
          text={isLoginState ? "Log In" : "Sign Up"}
          isActive={false}
          onClick={() => {}}
        />
      </form>
    </div>
  );
};

export default Login;
