import React from "react";
import { AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, isLoggingIn } = AuthContext();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    await login(data);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        <AuthForm mode="login" onSubmit={handleLogin} isLoading={isLoggingIn} />
      </div>
    </div>
  );
};

export default Login;