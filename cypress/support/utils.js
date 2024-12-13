export function gerarProduto() {
    const produtos = [
        'Smartphone', 'Notebook', 'Smart TV', 'Tablet', 'Desktop', 'Console de Videogame', 
        'Monitor', 'Roteador', 'Impressora', 'Fone de Ouvido', 'Caixa de Som', 'Câmera Digital',
        'Relógio Inteligente', 'Drone', 'Geladeira', 'Máquina de Lavar', 'Fogão', 'Forno Microondas', 
        'Ar Condicionado', 'Ventilador', 'Aspirador de Pó', 'Secadora de Roupas', 'Liquidificador', 
        'Cafeteira', 'Mixer', 'Sanduicheira', 'Panela de Pressão Elétrica', 'TV 4K', 'TV OLED', 
        'Home Theater', 'Projetor', 'Teclado', 'Mouse', 'SSD Externo', 'HD Externo', 'Pen Drive', 
        'Carregador Portátil', 'Cadeira Gamer', 'Webcam', 'Soundbar', 'Headset Gamer', 'Kindle', 
        'Luminária Inteligente', 'Smart Speaker', 'Robo Aspirador', 'Câmera de Segurança', 
        'Hub USB', 'Controle Remoto Universal', 'Placa de Vídeo', 'Processador', 'Placa Mãe'
    ];

    const produtoAleatorio = produtos[Math.floor(Math.random() * produtos.length)];
    const numeroAleatorio = Math.floor(1000 + Math.random() * 9000);
    const nomeProduto = `${produtoAleatorio} ${numeroAleatorio}`;
    
    return nomeProduto;
}

export function gerarEmail() {
    const timestamp = Date.now();
    const email = `user${timestamp}@qa.com`;

    return email;
}