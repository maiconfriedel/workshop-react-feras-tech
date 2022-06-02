import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

import Header from "./components/Header";

function App() {
  const [counter, setCount] = useState({ count: 0 });

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    const response = await axios.get(
      "https://api.github.com/users/maiconfriedel/repos"
    );

    setRepos(response.data);
    setLoading(false);
  }

  return (
    <>
      <Header />

      <p>Você clicou {counter.count} vezes</p>
      <button
        onClick={() => {
          getData();
        }}
      >
        Incrementar Contagem
      </button>

      {loading && <p>Carregando...</p>}
      <ul>
        {repos.map((item: any) => {
          return <li key={item.id}>{item.full_name}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
