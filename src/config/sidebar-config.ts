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
          isDisabled: true,
        },
        {
          title: "Salário Líquido", // Ideia para o futuro
          url: "#",
          isDisabled: true,
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
          isDisabled: true,
        },
        {
          title: "PDF para Word",
          url: "#",
          isDisabled: true,
        },
        {
          title: "Unir PDFs (Merge)",
          url: "#",
          isDisabled: true,
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
          isDisabled: true,
        },
        {
          title: "Comprimir Imagem",
          url: "#",
          isDisabled: true,
        },
        {
          title: "Redimensionar",
          url: "#",
          isDisabled: true,
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
          isDisabled: true,
        },
        {
          title: "Contrast Checker",
          url: "#",
          isDisabled: true,
        },
        {
          title: "Gradientes CSS",
          url: "#",
          isDisabled: true,
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
          isDisabled: true,
        },
        {
          title: "Gerador de Senhas",
          url: "#",
          isDisabled: true,
        },
        {
          title: "Contador de Caracteres",
          url: "#",
          isDisabled: true,
        },
      ],
    },
  ],
};