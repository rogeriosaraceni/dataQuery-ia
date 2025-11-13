// src/routes/api/analyze-products/+server.ts

import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const { query, products } = await request.json();
    console.log('Requisição recebida para analyze-products (server.ts)');

    // Formate os dados da tabela para um formato de string consistente e claro (JSON string)
    const productDataString = JSON.stringify(products);
    
    // Crie um prompt aprimorado
    const prompt = `
        Você é um analista de dados preciso e objetivo. Sua única tarefa é analisar os dados de produtos em JSON fornecidos abaixo e responder EXATAMENTE à pergunta do usuário. 
        Siga estas regras estritamente:
        1. Baseie sua resposta APENAS nos dados fornecidos.
        2. Seja conciso e direto.
        3. Se a pergunta for sobre o MAIOR ou MENOR valor, identifique o item correto sem erro.

        DADOS DOS PRODUTOS:
        ${productDataString}

        PERGUNTA DO USUÁRIO:
        "${query}"

        RESPOSTA FINAL:
    `.trim(); // Use .trim() para limpar espaços em branco no início/fim

    try {
        const ollamaResponse = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'mistral',
                prompt: prompt,
                stream: false,
                // Adicione parâmetros para tornar a resposta mais determinística:
                temperature: 0.1, // Diminui a criatividade/aleatoriedade (mais próximo de 0 é mais focado)
                num_predict: 50,  // Limita o tamanho da resposta para ser concisa
            }),
        });

        if (!ollamaResponse.ok) {
            throw new Error(`Ollama API error: ${ollamaResponse.statusText}`);
        }

        const data = await ollamaResponse.json();
        const result = data.response.trim();

        // Outro log útil
        console.log(`Resposta da IA recebida com sucesso: ${result}`);

        return json({ result });

    } catch (error) {
        console.error('Erro ao comunicar com Ollama:', error);
        return json({ result: 'Erro na análise de IA local.' }, { status: 500 });
    }
}

