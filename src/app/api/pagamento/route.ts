import { NextRequest, NextResponse } from 'next/server';
import { DadosPagamento, RespostaPagamento } from '@/interfaces/pagamento';

// Função para gerar um QR code simulado para o PIX
function gerarQrCodePix(chavePix: string, valor: number, beneficiario: string, descricao: string) {
  // Em um ambiente real, você usaria uma biblioteca como 'qrcode' para gerar o QR code
  
  // Este é um QR code de exemplo em base64
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOPSURBVO3BQY4cSRIEQdNA/f/Lun3TiQBCWVVrBmGf7A+pNcZgao3B1BqDqTUGU2sMptYYTK0xmFpjMLXGYGqNwdQag6k1BlNrDKbWGEytMZhaY/DhJRO/qeKkiSdVnJg4qeKJiScVJybuqjhp4omJ31TxyhqDqTUGU2sM7l5W8SYTd1XcVXFn4qTizsTfVMUTEycV3+TNKt5k4p01BlNrDKbWGHx4mYm7Kk4q7kzcVXFi4kTFExVPmLir4mUSb6q4M3FXxZtMvLLGYGqNwdQag/sf88LESRUnJk4qnpi4q+LExImKExP/srXGYGqNwdQag/sf05+puDPxRMWJiZOKkybepOJvWmMwtcZgao3B3cup+E0mTkycVHFi4q6KN5k4qeKuipOKkypeZuJvWmMwtcZgao3BfXdB/0UTd1WcmHhZxV0T/7K1xmBqjcHUGoMPL5n4m0ycVJyYuKvizsSJiZOKJyZOKk5MnFS8MPGbKu6qeGWNwdQag6k1Bh9eVvF/MvFExYmJOxV3Jk5MnFTcVfGEiScqTkycVJxU3FXxyhqDqTUGU2sM7l5m4l9WcWLipOLExImKkypOTNypOKniCRMnVZyY+D+tMZhaYzC1xuDuZRUnJu6qeMLEScWdipsqnph4ouKFiScq7kycVNyZODFxYuJExa9aYzC1xmBqjcGHl1TcmbiruKviRMWJiTsVd1W8YOKuipOKOxVPmLhTcWfizsSv1hhMrTGYWmPw4SUTT1S8UHFXxV0VdyZOKu5M3FVxYuKk4s7EExN3Ku5MnFS8zRqDqTUGU2sM7l5WcVfFCxNPVNyZOKm4q+LEROdV/GqNwdQag6k1Bh9eZuI3mXjCxBMVJyaeqDip4sTESRUnVZyYeKLipIo7E0+YeGWNwdQag6k1Bh9eMvGbTDxRcWLipOLExImJk4oTEycVT5g4qbgz8UTFiYk7FXcm3rTGYGqNwdQag/tLVdyZeJOKOxMnKk5MnFRxYuKk4q6KExN3Kp6o+Fc9scZgao3B1BqD+4+ZOKni/2TipOLOxImKOxVPmDip4kTFiYk7FScm3rTGYGqNwdQag7t/nIk7FScmnqi4q+LOxImJk4q7Kl6Y+JvWGEytMZhaY/DhJRO/qeKuipsq7kycVJxUcWLixMSJiScqTkycVNyZuDPxNq+sMZhaYzC1xmBqjcHUGoOpNQZTawym1hhMrTGYWmMwtcZgao3B1BqDqTUGU2sMptYYTK0xmFpj8B9fJb5QMEmuzgAAAABJRU5ErkJggg==';
}

// Esta é uma API simulada para demonstração
export async function POST(request: NextRequest) {
  try {
    // Extraindo os dados do corpo da requisição
    const dadosPagamento: DadosPagamento = await request.json();
    
    if (!dadosPagamento.nome || !dadosPagamento.email || !dadosPagamento.cpf) {
      return NextResponse.json(
        { error: 'Dados incompletos para o pagamento' },
        { status: 400 }
      );
    }
    
    // Informações do beneficiário do PIX - Pessoa Física
    const pixInfo = {
      beneficiario: "João Silva", // Nome da pessoa física
      chave: "4de1ab45-6789-4c82-8076-5f7841a12345", // Chave PIX aleatória
      tipo: "Chave aleatória",
      banco: "Nubank"
    };
    
    // Gerando o QR code para a chave PIX
    const qrCodeImage = gerarQrCodePix(
      pixInfo.chave, 
      dadosPagamento.valor, 
      pixInfo.beneficiario, 
      `The Mafia Premium - ${dadosPagamento.email}`
    );
    
    // Preparando resposta para o cliente
    const respostaPagamento: RespostaPagamento = {
      qrcode: qrCodeImage,
      pixCopiaECola: pixInfo.chave, // Usando diretamente a chave aleatória
      valor: dadosPagamento.valor,
      status: 'pendente',
    };
    
    // Adiciona informações de ajuda para o usuário
    return NextResponse.json({
      ...respostaPagamento,
      instrucoes: [
        "1. Abra o aplicativo do seu banco",
        "2. Escolha a opção 'Pagar com PIX'",
        "3. Selecione 'Pix Copia e Cola' e cole a chave acima",
        "4. Insira o valor de R$ " + dadosPagamento.valor.toFixed(2),
        "5. Na descrição, inclua seu email para confirmarmos seu pagamento",
        "6. Após o pagamento, você receberá acesso em até 5 minutos"
      ],
      beneficiario: pixInfo.beneficiario,
      tipoPix: pixInfo.tipo,
      banco: pixInfo.banco
    });
  } catch (error) {
    console.error('Erro ao processar pagamento:', error);
    return NextResponse.json(
      { error: 'Erro ao processar o pagamento' },
      { status: 500 }
    );
  }
} 