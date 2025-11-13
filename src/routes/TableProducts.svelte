<script lang="ts"> 
    import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
    import {
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
    } from "$lib/components/ui/table";

    // AQUI: Os dados 'products' precisam vir de fora (props)
    export let products: { id: number, name: string, price: number, category: string }[];
</script>    
    
<Card class="mb-8">
    <CardHeader>
        <CardTitle>Estoque Atual</CardTitle>
    </CardHeader>
    <CardContent>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead class="w-[100px]">ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Preço (R$)</TableHead>
                    <TableHead>Categoria</TableHead>
                </TableRow>
            </TableHeader>
            
            <TableBody>
                {#each products as product (product.id)}
                    <TableRow>
                        <TableCell class="font-medium">{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.price.toFixed(2)}</TableCell>
                        <TableCell>{product.category}</TableCell>
                    </TableRow>
                {/each}
            </TableBody>
        </Table>
    </CardContent>
</Card>