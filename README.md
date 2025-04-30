
# VigiaMoz - Sistema de Segurança Inteligente

[![GitHub License](https://img.shields.io/github/license/coisasdomangas/VigiaMoz-frontend)](https://github.com/coisasdomangas/VigiaMoz-frontend)
[![Vercel Status](https://img.shields.io/badge/Vercel-Deployed-%23000)](https://vigiamoz-frontend.vercel.app)
[![Render Status](https://img.shields.io/badge/Render-Deployed-%23000)](https://vigiamoz-backend.onrender.com)

Sistema completo para gestão de pedidos de instalação de câmeras de segurança em Moçambique, integrado com métodos de pagamento locais.

## 🚀 Funcionalidades Principais
- **Solicitação de Instalação Online**
- **Pagamento via Mpesa, eMola, mKesh**
- **Dashboard Administrativo com Gráficos**
- **Gestão de Pedidos em Tempo Real**
- **Site Responsivo para Todos os Dispositivos**

---

## 📦 Pré-requisitos
- Node.js (v18 ou superior)
- npm (v9 ou superior)
- Conta no [MongoDB Atlas](https://www.mongodb.com/atlas)
- Conta no [Vercel](https://vercel.com)
- Conta no [Render](https://render.com)

---

## 🛠️ Instalação Local

### 1. Clonar Repositório
```bash
git clone https://github.com/coisasdomangas/VigiaMoz-frontend.git
cd VigiaMoz-frontend


2. Configurar Frontend
bash
npm install  # Instalar dependências
3. Configurar Backend
bash
cd ../VigiaMoz-backend
npm install


⚙️ Configuração
Frontend (.env)
env
VITE_API_URL=https://vigiamoz-backend.onrender.com
VITE_MAPBOX_TOKEN=seu_token_mapbox
Backend (.env)
env
MONGODB_URI=sua_url_mongodb_atlas
JWT_SECRET=sua_chave_secreta_jwt
PORT=3000


🚀 Deploy Automático
Plataforma	Comando/Passo
Frontend (Vercel)	Conecte o repositório GitHub e faça deploy automático
Backend (Render)	Crie um Web Service e vincule ao repositório backend


📂 Estrutura do Projeto

VigiaMoz/
├── frontend/                  # Site público
│   ├── admin/                 # Painel administrativo
│   ├── assets/                # Imagens e ícones
│   ├── index.html             # Página inicial
│   └── ...                   # Outros arquivos
└── backend/                   # API
    ├── models/                # Modelos MongoDB
    ├── index.js               # Servidor principal
    └── ...                   # Configurações


    👥 Contribuidores
Paulo Manganhela (@paulomanganhela)

DS (DeepSeek) (@deepseek-ai)

📄 Licença
Este projeto está licenciado sob a Licença MIT.
