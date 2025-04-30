async function enviarPedido(e) {
    e.preventDefault();
    const dados = {
      nome: document.getElementById('nome').value,
      tipoLocal: document.getElementById('tipoLocal').value
    };
  
    try {
      const resposta = await fetch('https://seu-backend.onrender.com/api/pedidos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });
      
      Swal.fire('Sucesso!', 'Pedido registrado!', 'success');
    } catch (erro) {
      Swal.fire('Erro!', 'Tente novamente mais tarde.', 'error');
    }
  }