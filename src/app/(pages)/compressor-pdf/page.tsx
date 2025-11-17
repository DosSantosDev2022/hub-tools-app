import { AdBanner } from '@/components/global/google/ad-banner';

export default function PDFCompressorPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Compressor de PDF</h1>

      {/* Área da ferramenta... */}
      <div className="bg-gray-100 p-10 rounded-lg mb-8">
        <p>Aqui ficaria o formulário de upload...</p>
      </div>

      {/* ANÚNCIO AQUI */}
      <div className="my-8">
        <p className="text-sm text-gray-400 text-center mb-2">Publicidade</p>
        <AdBanner
          dataAdSlot="1234567890" // Este número vem do painel do AdSense ao criar um bloco
          dataAdFormat="auto"
          dataFullWidthResponsive={true}
        />
      </div>

      {/* Resto do conteúdo */}
    </div>
  );
}