// Buscar dados para dashboard
async function carregarDados() {
    try {
        const response = await fetch('https://seu-backend.onrender.com/api/dados');
        const data = await response.json();

        // Gráfico de Vendas
        new Chart(document.getElementById('vendasChart'), {
            type: 'line',
            data: {
                labels: data.vendas.meses,
                datasets: [{
                    label: 'Vendas Mensais (MT)',
                    data: data.vendas.valores,
                    borderColor: '#0052cc',
                    tension: 0.4
                }]
            }
        });

        // Gráfico de Métodos de Pagamento
        new Chart(document.getElementById('pagamentosChart'), {
            type: 'doughnut',
            data: {
                labels: data.pagamentos.metodos,
                datasets: [{
                    data: data.pagamentos.quantidades,
                    backgroundColor: ['#28a745', '#0052cc', '#ffc107', '#dc3545', '#17a2b8']
                }]
            }
        });

    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}

// Filtro de Data
document.getElementById('filtroData').addEventListener('change', async (e) => {
    const filtro = e.target.value;
    const response = await fetch(`/api/pedidos?filtro=${filtro}`);
    // Atualizar tabela com novos dados
});

// Inicialização
document.addEventListener('DOMContentLoaded', carregarDados);