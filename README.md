# Calculadora em JavaScript 🧮

Este projeto consiste numa réplica da interface de uma calculadora, desenvolvida com as tecnologias web fundamentais: HTML, CSS e JavaScript. O projeto foca-se fortemente na **Orientação a Objetos** em JavaScript, aplicando conceitos de estruturação limpa através de um Controlador.

## 🚀 Funcionalidades

- **Operações Básicas:** Adição, subtração, multiplicação e divisão, bem como cálculos percentuais, frações e afins.
- **Ecrã Dinâmico:** Atualização em tempo real do ecrã da calculadora, incluindo a formatação dos números.
- **Data e Hora:** O ecrã apresenta a data e a hora atuais, com atualização constante em tempo real.
- **Efeitos Sonoros:** Integração de um ficheiro de áudio (`click.mp3`) para fornecer feedback sonoro ao utilizador sempre que um botão é pressionado (pode ser ativado/desativado).
- **Gestão de Eventos (Teclado e Mouse):** Tratamento avançado de múltiplos eventos, suportando interação através de cliques no mouse ou através do teclado numérico (Numpad).
- **Design Fiel:** Estilização meticulosa baseada em calculadoras reais, utilizando uma tipografia customizada (`digital-7.ttf`) para recriar o aspeto clássico de um display de cristais líquidos.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Semântica e estruturação dos botões e painel.
- **CSS3:** Estilização visual, grelhas (se aplicável), e importação de fontes customizadas (`@font-face`).
- **JavaScript (ES6+):** Lógica da aplicação utilizando Classes (`class CalcController`), encapsulamento, métodos `get` e `set`, manipulação do DOM (Document Object Model) e controlo de áudio nativo.

## 📁 Estrutura de Ficheiros

O projeto encontra-se organizado da seguinte forma:

* **`/scripts/controller/calcController.js`**: O coração da aplicação. Contém a classe principal que gere toda a lógica de negócio, processamento dos cálculos, atualização do ecrã, e os *event listeners*.
* **`/scripts/calculator.js`**: O ficheiro de inicialização, responsável por instanciar a nossa classe controladora e dar vida à calculadora.
* **`index.html`**: A vista principal (View) que contém a estrutura gráfica da calculadora.
* **`click.mp3`**: O ficheiro de som que simula o "clique" das teclas.
* **`digital-7.ttf`**: Ficheiro da fonte de texto utilizada no ecrã.
* **`logo.png`**: Imagem de apoio para os ícones ou interface do projeto.
