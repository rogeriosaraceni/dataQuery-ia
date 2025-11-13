<script lang="ts">
    import { Button } from "$lib/components/ui/button";
	import { Textarea } from "$lib/components/ui/textarea";
    import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
    
    // Props (variáveis e funções) do componente pai
    export let query: string;
    export let analysisResult: string;
    export let analyzeData: () => Promise<void>; // Tipo para a função assíncrona
</script>

<Card>
    <CardHeader>
        <CardTitle>Consultar com IA</CardTitle>
    </CardHeader>
    <CardContent>
        <label for="query" class="block text-sm font-medium mb-2">Pergunte à IA sobre os dados acima:</label>
        <Textarea
            id="query" 
            bind:value={query}
            placeholder="Ex: Qual o produto mais caro e sua categoria?"
            rows={3}
            class="w-full"
        />
        <Button onclick={analyzeData} class="mt-4 w-full"> 
            Analisar com IA Mistral 7B Local
        </Button>

        <div class="mt-4 p-4 rounded-md">
            <p class="text-sm font-semibold">Resultado da IA:</p>
            <p class="mt-1">{analysisResult}</p>
        </div>
    </CardContent>
</Card>
