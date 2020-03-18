import React, { useEffect, useState } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";
import "./services/api";
import api from "./services/api";
import DevItem from "./components/DevItem/index";
import DevForm from "./components/DevForm";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
    /*...devs pega todos os devs que ja estavam ali e agrega reponse.data
    isso é feito para nao romper com os principios da imutabilidade na qual
    o react se baseia. Mesma coisa vale para os estados
    */
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map((
            dev // esse "(" é usado ao inves de escrever {return(componentes aqui)}
          ) => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
