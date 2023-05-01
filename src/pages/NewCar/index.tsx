import React from "react";
import CampoTexto from "../../components/CampoTexto";
import { ICarsProps } from "../Home";
import { useNavigate } from "react-router-dom";
import { createCar } from "../../utils";

function NewCar() {
  const navigate = useNavigate();
  const [car, setCar] = React.useState<ICarsProps>({
    brand: "",
    color: "",
    model: "",
    price: 0,
    year: 0,
    imgUrl: "",
  });

  const [loading, setLoading] = React.useState(false);

  async function save(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await createCar(car);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-[100vh] items-center justify-center bg-[#f2f1f6]">
      <h1 className="text-black font-semibold text-4xl mb-3">Novo Carro</h1>
      <div className="bg-white shadow-lg p-6 w-96 rounded flex flex-col gap-5">
        <CampoTexto
          value={car.brand}
          onChange={(text) => setCar({ ...car, brand: text.target.value })}
          obrigatorio
          placeholder="Marca"
          type="text"
        />
        <CampoTexto
          value={car.color}
          onChange={(text) => setCar({ ...car, color: text.target.value })}
          obrigatorio
          placeholder="Cor"
          type="text"
        />
        <CampoTexto
          value={car.model}
          onChange={(text) => setCar({ ...car, model: text.target.value })}
          obrigatorio
          placeholder="Modelo"
          type="text"
        />
        <CampoTexto
          value={car.imgUrl}
          onChange={(text) => setCar({ ...car, imgUrl: text.target.value })}
          obrigatorio
          placeholder="URL da imagem"
          type="text"
        />
        <div className="flex items-center gap-2">
          <p>Preço:</p>
          <CampoTexto
            value={car.price}
            onChange={(text) => setCar({ ...car, price: text.target.value })}
            obrigatorio
            placeholder="Preço"
            type="number"
          />
        </div>
        <div className="flex items-center gap-2">
          <p>Ano:</p>
          <CampoTexto
            value={car.year}
            onChange={(text) => setCar({ ...car, year: text.target.value })}
            obrigatorio
            placeholder="Ano"
            type="number"
          />
        </div>

        <button
          onClick={save}
          className="bg-blue-500 px-4 py-2 rounded text-white font-medium uppercase"
        >
          {loading ? "Processando..." : "Salvar"}
        </button>
      </div>
    </div>
  );
}

export default NewCar;
