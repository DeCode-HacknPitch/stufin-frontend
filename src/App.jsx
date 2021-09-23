import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Signup, Login } from "./pages";

const App = () => {
  const [signupPage, setSignupPage] = useState(true);
  const redirectToLoginPage = () => {
    setSignupPage(false);
  };
  const redirectToSignupPage = () => {
    setSignupPage(true);
  };

  return (
    <div>
      <Toaster />
      {signupPage ? (
        <Signup redirectToLoginPage={redirectToLoginPage} />
      ) : (
        <Login redirectToSignupPage={redirectToSignupPage} />
      )}
    </div>
  );
};

export default App;
