//@ts-nocheck
import React from "react";
import CampoTexto from "../../components/CampoTexto";
import { Link, useNavigate } from "react-router-dom";

interface IUserData {
  email: string;
  password: string;
}
const Login = () => {
  const [userData, setUserData] = React.useState<IUserData>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-[100vh] items-center justify-center bg-[#f2f1f6]">
      <div className="bg-white shadow-lg p-4 w-2/5 h-2/5 flex flex-col items-center justify-evenly rounded gap-3 ">
        <h1 className="text-2xl font-semibold text-gray-500 uppercase">
          Login
        </h1>

        <div className="w-full flex flex-col gap-3">
          <CampoTexto
            obrigatorio
            placeholder="Digite seu email"
            onChange={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
            type="text"
            value={userData.email}
          />
          <CampoTexto
            obrigatorio
            placeholder="Digite sua senha"
            onChange={(event) =>
              setUserData({ ...userData, password: event.target.value })
            }
            type="password"
            value={userData.password}
          />
        </div>

        <button
          className="bg-blue-400 w-2/5 rounded text-white font-semibold py-2"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();

            if (!userData.email && !userData.password) {
              return alert("Preencha todos os campos!");
            }
            navigate("/home");
            console.log(userData);
          }}
        >
          Logar
        </button>
      </div>
    </div>
  );
};

export default Login;
