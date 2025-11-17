'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query'; // Importação do hook
import { ArrowRightLeft, RefreshCcw, AlertCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

// Lista simplificada de moedas
const CURRENCIES = [
  { code: 'BRL', name: 'Real Brasileiro' },
  { code: 'USD', name: 'Dólar Americano' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'Libra Esterlina' },
  { code: 'JPY', name: 'Iene Japonês' },
];

// Função fetch busca taxas de cãmbio
const fetchExchangeRates = async (baseCurrency: string) => {
  const res = await fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`);
  if (!res.ok) {
    throw new Error('Falha ao buscar taxas de câmbio');
  }
  return res.json();
};

export default function CurrencyConverter() {
  // Estados de UI
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('BRL');

  // React Query Hook
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['exchange-rates', fromCurrency], // A chave muda se a moeda de origem mudar
    queryFn: () => fetchExchangeRates(fromCurrency),
    staleTime: 1000 * 60 * 5, // Os dados ficam "frescos" por 5 minutos (cache)
    refetchOnWindowFocus: false, // Evita recarregar só de mudar de aba
  });

  const currentRate = data?.rates[toCurrency] || 0;
  const result = amount ? parseFloat(amount) * currentRate : 0;

  // Função para inverter as moedas
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    // O React Query deteta a mudança de 'fromCurrency' e busca os novos dados automaticamente
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <RefreshCcw className={`w-5 h-5 text-primary ${isLoading ? 'animate-spin' : ''}`} />
          Conversor de Moedas
        </CardTitle>
        <CardDescription>
          Taxas de câmbio atualizadas em tempo real.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Tratamento de Erro Visual */}
        {isError && (
          <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>Erro ao carregar taxas: {(error as Error).message}</span>
          </div>
        )}

        {/* Input do Valor */}
        <div className="space-y-2">
          <Label htmlFor="amount">Valor</Label>
          <Input
            id="amount"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-lg font-medium"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          {/* Select Moeda Origem */}
          <div className="w-full space-y-2">
            <Label>De</Label>
            <Select
              value={fromCurrency}
              onValueChange={setFromCurrency}
              disabled={isLoading}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder="Moeda" />
              </SelectTrigger>
              <SelectContent>
                {CURRENCIES.map((c) => (
                  <SelectItem key={c.code} value={c.code}>
                    {c.code} - {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Botão de Inversão */}
          <Button
            variant="ghost"
            size="icon"
            className="mt-6 shrink-0 rounded-full hover:bg-muted"
            onClick={handleSwap}
            disabled={isLoading}
          >
            <ArrowRightLeft className="w-4 h-4" />
          </Button>

          {/* Select Moeda Destino */}
          <div className="w-full space-y-2">
            <Label>Para</Label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder="Moeda" />
              </SelectTrigger>
              <SelectContent>
                {CURRENCIES.map((c) => (
                  <SelectItem key={c.code} value={c.code}>
                    {c.code} - {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>

      <CardFooter className="bg-muted/50 flex flex-col items-start p-6 pt-4">
        <div className="text-sm text-muted-foreground">Resultado da conversão:</div>
        <div className="text-3xl font-bold tracking-tight text-foreground mt-1">
          {isLoading ? (
            <span className="animate-pulse text-muted-foreground">Calculando...</span>
          ) : (
            <>
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: toCurrency }).format(result)}
            </>
          )}
        </div>
        <div className="text-xs text-muted-foreground mt-2">
          {!isLoading && currentRate > 0 && (
            <>1 {fromCurrency} = {currentRate.toFixed(4)} {toCurrency}</>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}