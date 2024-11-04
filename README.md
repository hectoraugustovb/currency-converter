# Conversor de Moedas

## Visão Geral

A aplicação permite que os usuários convertam um valor de uma moeda para outra. Os usuários podem selecionar a moeda de origem e a moeda de destino, e a aplicação calcula automaticamente o valor convertido com base nas taxas de câmbio mais recentes.

## Funcionalidades

- **Conversão de Moedas**: O usuário pode inserir um valor em uma moeda e selecionar a moeda de origem e a moeda de destino.
- **Interface Intuitiva**: A aplicação possui uma interface de usuário simples e intuitiva, facilitando a navegação e o uso.

## Estrutura do Projeto

A aplicação é construída utilizando as seguintes tecnologias:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **SCSS**: Pré-processador CSS para estilização.
- **ExchangeRate-API**: API utilizada para obter as taxas de câmbio atuais ([Veja a documentação aqui](https://www.exchangerate-api.com/docs/overview)).

### Estrutura de Arquivos

```plaintext
.
├── src
│   ├── components
│   │   ├── Conversor              # Componente principal do conversor
│   │   └── Header                 # Componente do cabeçalho da aplicação
│   ├── services
│   │   └── getCurrencyValue.js   # Serviço para buscar valores de câmbio
│   ├── utils
│   │   └── currency.js            # Dados de moedas disponíveis
│   ├── index.scss                 # Estilização base da aplicação
│   ├── App.jsx                    # Componente principal da aplicação
│   └── Main.jsx                   # Componente de renderização da aplicação
├── .env                           # Variáveis de ambiente
└── package.json                   # Dependências e scripts da aplicação
```

## Instalação

Para executar a aplicação, siga as etapas abaixo:

1. Clone o repositório:
```bash
git clone https://github.com/hectoraugustovb/currency-converter.git
```

2. Abra o repositório:
```bash
cd currency-converter
```

2. Instale as dependências:
```bash
Npm:
$ npm install

Yarn:
$ yarn install
```

A aplicação tem a porta `3000` como padrão. \
Responsividade não foi desenvolvida para está aplicação, portanto executa-la em dispositivos mobile poderá apresentar problemas de estilização.
