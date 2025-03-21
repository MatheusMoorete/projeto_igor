import { NextRequest, NextResponse } from 'next/server';
import { DadosPagamento, RespostaPagamento } from '@/interfaces/pagamento';

// Função para gerar um QR code simulado para o PIX
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gerarQrCodePix(_chavePix: string, _valor: number, _beneficiario: string, _descricao: string) {
  // Em um ambiente real, você usaria uma biblioteca como 'qrcode' para gerar o QR code
  
  // Este é um QR code de exemplo em base64
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOPSURBVO3BQY4cSRIEQdNA/f/Lun3TiQBCWVVrBmGf7A+pNcZgao3B1BqDqTUGU2sMptYYTK0xmFpjMLXGYGqNwdQag6k1BlNrDKbWGEytMZhaY/DhJRO/qeKkiSdVnJg4qeKJiScVJybuqjhp4omJ31TxyhqDqTUGU2sM7l5W8SYTd1XcVXFn4qTizsTfVMUTEycV3+TNKt5k4p01BlNrDKbWGHx4mYm7Kk4q7kzcVXFi4kTFExVPmLir4mUSb6q4M3FXxZtMvLLGYGqNwdQag/sf88LESRUnJk4qnpi4q+LExImKExP/srXGYGqNwdQag/sf05+puDPxRMWJiZOKkybepOJvWmMwtcZgao3B3cup+E0mTkycVJyYuKvizsSJiZOKkypOKk5MnFS8zMTftMZgao3B1BqD++6C/osm7qo4MfGyirsm/mVrjcHUGoOpNQYfXjLxN5k4qTgxcVfFnYkTEycVT0ycVJyYOKl4YeI3VdxV8coag6k1BlNrDD68rOL/ZOKJihMTdyruTJyYOKm4q+IJE09UnJg4qTipuKvilTUGU2sMptYY3L3MxL+s4sTEScWJiRMVJ1WcmLhTcVLFEyZOqjgx8X9aYzC1xmBqjcHdyyruTNxV8YSJk4q7Km6qeGLiiYoXJp6ouDNxUnFn4sTEiYkTFb9qjcHUGoOpNQYfXlJxZ+Ku4q6KExUnJu5U3FXxgom7Kk4q7lQ8YeJOxZ2JOxO/WmMwtcZgao3Bh5dMPFHxQsVdFXdV3Jk4qbgzcVfFiYmTijsTT0zcqbgzcVLxNmsMptYYTK0xuHtZxV0VL0w8UXFn4qTiroqTErZ9sZoAAArASURBVDgx0XkVv1pjMLXGYGqNwYeXmfhNJp4w8UTFiYknKk6qODFxUsVJFScmnqg4qeLOxBMm3m+NwdQag6k1Bh9eMvGbTDxRcWLipOLExImJk4oTEycVT5g4qbgz8UTFiYk7FXcm3rTGYGqNwdQag/tLVdyZeJOKOxMnKk5MnFRxYuKk4q6KExN3Kp6o+Fc9scZgao3B1BqD+4+ZOKni/2TipOLOxImKOxVPmDipOFFxYuJOxYmJN60xmFpjMLXG4O4fZ+JOxYmJJyruqrgzcWLipOKuihcm/qY1BlNrDKbWGHx4ycRvqrir4qaKOxMnFScVJyZOTJyYeKLixMRJxZ2JOxNv88oag6k1BlNrDKbWGEytMZhaYzC1xmBqjcHUGoOpNQZTawym1hhMrTGYWmMwtcZgao3B1BqDqTUG/wFfJb5QMEmuzgAAAABJRU5ErkJggg==';
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