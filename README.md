# rchlo-payments

## Descrição

O rchlo-payments é um aplicativo desenvolvido como parte de um teste para uma vaga de desenvolvedor na Midway. O aplicativo permite aos usuários realizar pagamentos usando saldo ou crédito e escolher o número de parcelas para pagamento.

## Funcionalidades

- Realização de pagamentos com o saldo.
- Realização de pagamentos no crédito.
- Seleção de parcelas para divisão do pagamento.
- Resumo de valor total com taxas do cartão.
- Envio da transação (exemplo).
- Tela de transação efetuada com sucesso.

## Tecnologias Utilizadas

- React Native
- Redux e Redux Toolkit
- React Navigation
- Styled Components
- React Native Safe Area Context
- Jest e React Testing Library

## Instalação

### Pré-requisitos

Certifique-se de que seu ambiente possui as seguintes dependências instaladas:

- Node.js versão 12 ou superior.
- Yarn.
- Android Studio (para configurar o SDK do Android).
- Xcode (para rodar no iOS).

### Configuração

1. Clone o repositório para o seu ambiente local:
   - **HTTPS**:
     ```bash
     git clone https://github.com/Michelsom/rchlo-payments.git
     ```
   - **SSH**:
     ```bash
     git clone git@github.com:Michelsom/rchlo-payments.git
     ```

2. Navegue até o diretório do projeto:
   ```bash
   cd rchlo-payments
Instale as dependências do projeto:
   ```bash
   yarn install
   ```

No macOS, instale as dependências do iOS com CocoaPods:
```bash
cd ios && pod install && cd ..
```

Configure o arquivo local.properties para Android:

Navegue até o diretório android/ no seu projeto.
Crie um arquivo chamado local.properties (caso ainda não exista).

Adicione o caminho para o SDK do Android:

sdk.dir=/caminho/para/android/sdk

Exemplo no macOS:

sdk.dir=/Users/seu-usuario/Library/Android/sdk

- Executando o Aplicativo
- 
### iOS

Para executar no iOS, use:

```bash
yarn ios
```

Certifique-se de que o simulador do iOS está aberto ou que um dispositivo físico está conectado.

### Android

Para executar no Android, use:

```bash
yarn android
```

Certifique-se de que um dispositivo ou emulador Android está conectado e funcionando.

### Testes

Execute os testes do projeto com:

```bash
yarn test
```

### Vídeos Demonstrativos

Veja um vídeo de demonstração do aplicativo:

- https://github.com/Michelsom/rchlo-payments/blob/main/simulator-iPhone.mp4

