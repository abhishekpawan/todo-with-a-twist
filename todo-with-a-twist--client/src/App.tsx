import { Route, Routes } from "react-router-dom";
import Button from "./components/Button/Button";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/components">
        <Route
          path="button"
          element={
            <Button text="Click here" isActive={false} onClick={() => {}} />
          }
        />
      </Route>
      {/* pages */}
      <Route path="/get-started" element={<Login />} />
      {/* pages */}
    </Routes>
  );
}

export default App;
