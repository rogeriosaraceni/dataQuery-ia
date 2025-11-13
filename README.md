# 📊 DataQuery-IA

Um sistema web que permite a análise de dados de tabelas de produtos em tempo real usando Inteligência Artificial local, garantindo privacidade e processamento eficiente através do Ollama.

O objetivo do projeto é demonstrar a integração de um frontend moderno (SvelteKit + Tailwind CSS) com um modelo de Linguagem Grande (LLM) rodando localmente (Llama 2 ou Mistral).

---

## ✨ Tecnologias Utilizadas

- **Frontend**: [SvelteKit](https://kit.svelte.dev/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Componentes**: [shadcn-svelte](https://www.shadcn-svelte.com/)
- **Backend & API**: SvelteKit Endpoints (`+server.ts`)
- **Inteligência Artificial**: [Ollama](https://ollama.com/) (Servidor Local de LLMs)
- **Modelo de IA**: [Mistral](https://mistral.ai/)
- **Linguagens**: TypeScript, HTML, CSS
---

## ⚙️ Instalação e Configuração

Siga os passos abaixo para configurar e rodar o projeto em sua máquina Ubuntu (ou outro sistema operacional compatível).

### 1. Pré-requisitos

Certifique-se de ter instalado:
- **Node.js e npm**: Para o projeto SvelteKit.
- **Ollama**: Para rodar a IA localmente.

### 2. Configuração do Projeto Web (SvelteKit)

Clone o repositório e instale as dependências:
```bash
git clone https://github.com/rogeriosaraceni/dataQuery-ia
cd dataQuery-ia
npm install
```

### 3. Configuração do Ollama (IA Local)

Você precisa garantir que o serviço Ollama esteja rodando e que o modelo necessário esteja baixado.

**A. Instalar o Ollama (se ainda não fez):**

Siga as instruções oficiais em ollama.com.

**B. Baixar o Modelo de IA:**

Abra um terminal e baixe o modelo que o projeto utiliza (`llama2`):
```bash
ollama pull llama2
# Alternativamente, você pode usar 'mistral' para um modelo mais rápido:
# ollama pull mistral
```

**C. Verificar e Iniciar o Serviço (Ubuntu/Linux):**

Confirme se o serviço está ativo (geralmente inicia automaticamente):
```bash
# Verifique o status do serviço:
sudo systemctl status ollama

# Se não estiver rodando, inicie:
sudo systemctl start ollama

# Para parar o serviço
sudo systemctl stop ollama
```

### 4. Rodando o Projeto

Com o Ollama rodando em um terminal separado (ou em segundo plano via serviço), inicie o servidor de desenvolvimento do SvelteKit:
```bash
npm run dev
```

Abra seu navegador e visite http://localhost:5173 (ou a porta indicada pelo Vite).

---

## 🚀 Uso

1. Na página inicial, você verá uma tabela de produtos estilizada com Tailwind CSS.
2. Abaixo da tabela, há um campo de texto (`<textarea>`) onde você pode digitar perguntas sobre os dados da tabela.
3. Clique em **"Analisar com IA Local"**.
4. O frontend fará uma requisição ao endpoint do SvelteKit, que se comunica com seu serviço Ollama local, e a resposta da IA será exibida na tela.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests no repositório para melhorias na estilização, na engenharia de prompt ou na integração.

---

## 🔗 Referências

- **SvelteKit**: https://kit.svelte.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Ollama**: https://ollama.com/
- **Mistral AI**: https://mistral.ai/
