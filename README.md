# VCR-DIGITAL



CREATE TABLE depoimentos (
    id SERIAL PRIMARY KEY,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nome_usuario VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL
);


SELECT * FROM depoimentos;


INSERT INTO depoimentos (data, nome_usuario, mensagem) VALUES
( '02/05/2025', 'Sérgio Costa Almeida', 'Muito bom o serviço fornecido pela VCR, ajudaram bastante no desenvolvimento da minha empresa.'),
( '13/09/2024', 'Maicon Mikael', 'Serviço mal feito, prejudicaram minha empresa no desenvolvimento de marketing digital.'),
( '30/01/2012', 'José de Alencar', 'O serviço feito por eles é de excelente qualidade, feito com muito cuidado em todos os métodos usados. ');
