import React from "react";
import { AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { signup, isSigningUp } = AuthContext();
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    await signup(data);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <AuthForm mode="register" onSubmit={handleRegister} isLoading={isSigningUp} />
      </div>
    </div>
  );
};

export default Register;