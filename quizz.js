// Função para buscar dados de uma API
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
        console.log('Dados da API:', data);
    } catch (error) {
        // Tratando erros
        console.error('Erro ao buscar dados:', error.message);
    }
}

// Chamar a função
fetchData();
