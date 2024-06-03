import { useState } from "react";
import Button from "../../components/Button/Button";
const Error = () => {
  const [isValidPage, setIsValidPage] = useState<boolean>(false);
  return (
    <>
      <div className="error">
        <div className="error_code">404</div>
        <p>Sorry, This Page Doesn't Exist !</p>
        <div className="error_message">
          Would You Like Return To Home Page ?
        </div>
        <Button
          type="box"
          text="Home"
          isActive={false}
          onClick={() => setIsValidPage(!isValidPage)}
        />
      </div>
    </>
  );
};

export default Error;
