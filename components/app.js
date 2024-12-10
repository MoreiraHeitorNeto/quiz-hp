


async function fetchData() {
  const apiUrl = 'http://localhost:3000/dados'; // URL da API

  try {
      // Fazendo a requisição
      const response = await fetch(apiUrl);

      // Verificando se a resposta foi bem-sucedida
      if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
      }

      // Convertendo o corpo da resposta para JSON
      const data = await response.json();
      // Exibindo os dados no console
      //console.log('Dados da API:', data[0].question);
  } catch (error) {
      // Tratando erros
      console.error('Erro ao buscar dados:', error.message);
  }
}

// Chamar a função
fetchData();

const App = () => {
  // Função a ser chamada ao clicar no botão
  const handleButtonClick = () => {
    alert('O botão foi clicado!');
    ReactDOM.createRoot(rootElement).render(<App />);
  };

  

  return (
    <><div class="text-overlay">
      What is the name of the Weasley's house?
    </div><div class="options-container">
        <a onClick={handleButtonClick} class="item"><img src="img/optionA.png" alt="" /></a>
        <div class="text-overlay-optionA">Number 12 Grimmauld Place</div>
        <a onClick={handleButtonClick} class="item"><img src="img/optionB.png" alt="" /></a>
        <div class="text-overlay-optionB">The Burrow</div>
        <a onClick={handleButtonClick} class="item"><img src="img/optionC.png" alt="" /></a>
        <div class="text-overlay-optionC">The Leaky Cauldron</div>
        <a onClick={handleButtonClick} class="item"><img src="img/optionD.png" alt="" /></a>
        <div class="text-overlay-optionD">Hagrid's Hut</div>
      </div></>
  );
};





// Renderiza o componente App no elemento com ID "root"
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);
