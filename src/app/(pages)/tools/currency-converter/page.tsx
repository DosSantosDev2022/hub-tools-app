import { AdBanner } from '@/components/global/google/ad-banner';
import CurrencyConverter from '@/components/pages/tools/currency-converter';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Conversor de Moedas: Cotação do Dólar, Euro e Real Hoje',
  description: 'Converta valores em tempo real com nossa calculadora de câmbio gratuita. Veja a cotação do Dólar, Euro, Bitcoin e outras moedas com dados atualizados.',
  keywords: ['conversor de moedas', 'cotação dólar', 'câmbio hoje', 'calculadora de cambio', 'real para dolar', 'euro hoje'],
  authors: [{ name: 'Hub Tools App' }],
  alternates: {
    canonical: '/tools/currency-converter',
  },
  openGraph: {
    title: 'Conversor de Moedas Online e Gratuito',
    description: 'Ferramenta rápida para converter moedas com taxas de mercado em tempo real.',
    url: 'https://seusite.com/tools/currency-converter', // Substitua pelo seu domínio real
    siteName: 'Sua Central de Ferramentas',
    images: [
      {
        url: 'https://seusite.com/og-currency.jpg', // Imagem que aparece no WhatsApp/Facebook
        width: 1200,
        height: 630,
        alt: 'Prévia do Conversor de Moedas',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor de Moedas em Tempo Real',
    description: 'Acompanhe a cotação do dólar e converta valores instantaneamente.',
  },
};

export default function ToolsPage() {
  return (

    <div className="mx-auto container p-8">

      <div className="mb-8 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">Conversor de moedas</h2>
        <p className="text-muted-foreground mt-2">
          Bem-vindo à ferramenta de moedas e taxas de câmbio mais confiável do mundo.
          Converta valores em tempo real utilizando dados do mercado financeiro.
        </p>
      </div>

      <div className="mb-12">
        <CurrencyConverter />
      </div>

      {/* ÁREA DE ANÚNCIO */}

      <div className="my-8 flex flex-col items-start">
        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
          Publicidade
        </p>

        <div className="w-full max-w-[728px]">
          <AdBanner
            dataAdSlot="1234567890"
            dataAdFormat="auto"
            dataFullWidthResponsive={true}
          />
        </div>
      </div>
    </div>
  );
}