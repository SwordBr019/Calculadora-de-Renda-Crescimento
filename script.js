// script.js

// Função para adicionar campos para outro estado
function addState() {
    const stateInputs = document.getElementById('stateInputs');
  
    // Criar um novo bloco para outro estado
    const newStateInput = document.createElement('div');
    newStateInput.className = 'stateInput';
  
    // Adicionar campos para o novo estado
    newStateInput.innerHTML = `
      <label for="stateName">Nome do Estado:</label>
      <input type="text" class="stateName" required>
  
      <label for="currentIncome">Renda Atual:</label>
      <input type="number" class="currentIncome" required>
  
      <label for="growthRate">Taxa de Crescimento (%):</label>
      <input type="number" class="growthRate" required>
    `;
  
    // Adicionar o novo bloco ao formulário
    stateInputs.appendChild(newStateInput);
  }
  
  // Função para calcular o crescimento
  function calculateGrowth() {
    // Obter todos os blocos de entrada de estado
    const stateInputs = document.getElementsByClassName('stateInput');
  
    // Inicializar o resultado
    let resultHTML = '<h2>Resultados</h2>';
  
    // Loop através de cada estado
    for (let i = 0; i < stateInputs.length; i++) {
      const stateName = stateInputs[i].getElementsByClassName('stateName')[0].value;
      const currentIncome = parseFloat(stateInputs[i].getElementsByClassName('currentIncome')[0].value);
      const growthRate = parseFloat(stateInputs[i].getElementsByClassName('growthRate')[0].value);
  
      // Calcular o fator de crescimento e a renda futura
      const growthFactor = 1 + (growthRate / 100);
      const futureIncome = currentIncome * growthFactor;
  
      // Adicionar o resultado ao HTML
      resultHTML += `
        <p>${stateName}: ${futureIncome.toFixed(2)}</p>
      `;
    }
  
    // Exibir o resultado na div de resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = resultHTML;
  }
  