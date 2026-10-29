# 🐻 Beary Sweet Café — Simulador de Compras

Lianna Cavalcante | Desenvolvimento Mobile

## ☕ Sobre a Loja

O **Beary Sweet Café** é uma loja fictícia inspirada em confeitarias e cafeterias artesanais no estilo *Kawaii*. O projeto foi desenvolvido como uma aplicação web simples para apresentar um cardápio de doces e bebidas personalizadas, permitindo que o usuário simule um pedido direto no balcão e veja o cálculo do valor total.

## 🧁 Cardápio de Produtos

| Produto | Descrição | Preço | 
| ----- | ----- | ----- | 
| **Cupcake Charmoso** | Massa de chocolate fofinha em urso com cobertura de chantilly | R\$ 14,00 | 
| **Donut Fofo Recheado** | Donut macio com recheio patissière e cobertura de baunilha em foquinha | R\$ 18,00 | 
| **Capuccino Preguiçoso** | Capuccino cremoso de caramelo com espuma de chocolate em urso | R\$ 10,00 | 

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica do cardápio, seções e rodapé.

* **CSS3:** Estilização personalizada, Flexbox para responsividade.

* **JavaScript (ES6):** Interatividade do carrinho, captura de dados via `prompt()`, tratamento de erros com `isNaN()`, cálculos matemáticos e exibição do resumo do pedido com `alert()`.

## 🚀 Como Executar o Projeto

1. Clone ou baixe este repositório para o seu computador.

2. Certifique-se de manter a seguinte estrutura de pastas:

   ```
   ├── index.html
   ├── style.css
   ├── script.js
   └── assets/
       ├── favicon.png
       ├── sweet_bear.png
       ├── cupcake.png
       ├── donut.png
       ├── capuccino.png
       └── fundo-doodle.png
   
   ```

3. Abra o arquivo `index.html` em qualquer navegador web (Google Chrome, Firefox, Edge, etc.).

4. Clique no botão **"Simular Compra"** para rodar a simulação de compra no navegador.

## 📸 Captura de Tela da Página

## 🧪 Testes Realizados

Para garantir o funcionamento correto da simulação, foram realizados os seguintes testes no navegador:

1. **Seleção Normal de Produtos:** Digitação de quantidades válidas (ex: 1 Cupcake, 2 Donuts, 1 Capuccino). O resumo exibiu as quantidades, subtotais corretos e o valor total de R\$ 60,00.

2. **Compra Zerada:** Digitação do valor `0` para todos os produtos. A aplicação exibiu a mensagem *"Nenhum produto foi selecionado! Volte sempre 🧸"*.

3. **Entrada Inválida:** Digitação de letras ou caracteres especiais nos campos de quantidade. A aplicação identificou a entrada inválida via `isNaN()` e retornou um alerta amigável solicitando o preenchimento correto de números.

## 💡 Dificuldades Encontradas e Aprendizados

* **Dificuldade:** Ajustar uma imagem que tinha tamanho diferente das demais, sem ter que usar outras ferramentas externas de design.

* **O que aprendi:** Aprendi a utilizar o pseudo-elemento `body::before` combinado com `position: absolute`, `z-index: -1` e `opacity: 0.08`. Isso permitiu criar uma camada separada exclusiva para o fundo decorativo, mantendo a leitura do conteúdo totalmente nítida.

## 🤖 Uso de Inteligência Artificial

A inteligência artificial foi utilizada como ferramenta de suporte/tutoria durante o desenvolvimento:

* **Como ajudou:** Auxiliou na estruturação da lógica de validação do JavaScript (`isNaN()`), na criação da estampa visual para o fundo da página, e indicou como deixar os cards dos produtos mais bonitos.

* **Correções feitas:** Buscou por erros gramaticais no HTML.

* **Verificação:** Todos os cálculos e comportamentos da página foram testados manualmente no navegador para confirmar que atendiam integralmente aos requisitos do desafio.