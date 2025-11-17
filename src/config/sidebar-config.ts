import { 
  FileText, 
  Image as ImageIcon, 
  Calculator, 
  Palette, 
  Wrench,
} from "lucide-react";

export const data = {
  navMain: [
    {
      title: "Financeiro",
      url: "/tools/finance",
      icon: Calculator,
      isActive: true, // Deixa esta aba aberta por padrão já que acabamos de criar o conversor
      items: [
        {
          title: "Conversor de Moedas",
          url: "/tools/currency-converter",
        },
        {
          title: "Calculadora de Juros", // Ideia para o futuro
          url: "#",
        },
        {
          title: "Salário Líquido", // Ideia para o futuro
          url: "#",
        },
      ],
    },
    {
      title: "Documentos & PDF",
      url: "/tools/pdf",
      icon: FileText,
      items: [
        {
          title: "Comprimir PDF",
          url: "#",
        },
        {
          title: "PDF para Word",
          url: "#",
        },
        {
          title: "Unir PDFs (Merge)",
          url: "#",
        },
      ],
    },
    {
      title: "Imagens",
      url: "/tools/images",
      icon: ImageIcon,
      items: [
        {
          title: "Converter para JPG/PNG",
          url: "#",
        },
        {
          title: "Comprimir Imagem",
          url: "#",
        },
        {
          title: "Redimensionar",
          url: "#",
        },
      ],
    },
    {
      title: "Design & Cores",
      url: "/tools/design",
      icon: Palette,
      items: [
        {
          title: "Gerador de Paletas",
          url: "#",
        },
        {
          title: "Contrast Checker",
          url: "#",
        },
        {
          title: "Gradientes CSS",
          url: "#",
        },
      ],
    },
    {
      title: "Utilitários",
      url: "/tools/utils",
      icon: Wrench,
      items: [
        {
          title: "Gerador de QR Code",
          url: "#",
        },
        {
          title: "Gerador de Senhas",
          url: "#",
        },
        {
          title: "Contador de Caracteres",
          url: "#",
        },
      ],
    },
  ],
};