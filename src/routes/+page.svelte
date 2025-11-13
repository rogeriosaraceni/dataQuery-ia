<script lang="ts">
	import ButtonTheme from "$lib/components/buttonTheme.svelte";
	import Form from "./Form.svelte";
	import TableProducts from "./TableProducts.svelte";
    
    // 1. Definição dos estados e dados (componente pai gerencia os dados)
    let query = '';
    let analysisResult = 'Resultados da análise aparecerão aqui...';

    const products = [
        { id: 1, name: 'Notebook Dell', price: 5500, category: 'Eletrônicos' },
        { id: 2, name: 'Mouse Logitech', price: 150, category: 'Acessórios' },
        { id: 3, name: 'Teclado Mecânico', price: 400, category: 'Acessórios' },
        { id: 4, name: 'Monitor Ultrawide', price: 1800, category: 'Eletrônicos' },
        { id: 5, name: 'Cadeira Gamer', price: 1200, category: 'Mobiliário' },
    ];

    // 2. Definição da função de análise
    async function analyzeData() {
        analysisResult = 'Analisando...';
        const response = await fetch('/api/analyze-products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, products }),
        });

        const data = await response.json();
        analysisResult = data.result;
    }
</script>

<div class="p-4 max-w-4xl mx-auto">
    <div class="flex items-center justify-between gap-3 border-b border-b-zinc-100 pb-2 mb-4">
        <div>DataQuery-IA</div>
        <div>
            <ButtonTheme />
        </div>
    </div>

    <h1 class="text-2xl text-center mb-6">Análise de Produtos</h1>

    <TableProducts products={products}/>

    <Form 
        bind:query={query} 
        bind:analysisResult={analysisResult} 
        analyzeData={analyzeData} 
    />
</div>
