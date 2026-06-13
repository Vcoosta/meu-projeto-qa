# 🛍️ Automação de E-commerce: Mapeamento de Fluxos Críticos

Este projeto é uma suíte de testes automatizados de ponta a ponta (End-to-End) desenvolvida para a loja virtual [Sauce Demo](https://sauce-demo.myshopify.com/). 

## 🎯 O Objetivo do Projeto
A ideia central deste repositório não é apenas testar botões, mas sim **estruturar a validação do sistema através de cenários de fluxos independentes e reais**. O objetivo é garantir que as jornadas mais críticas para o negócio (aquelas que impactam diretamente o cliente e a receita) funcionem de forma íngrafa e resiliente.

Ao dividir a automação em fluxos lógicos, o projeto ganha manutenção facilitada, isolamento de falhas e clareza sobre qual área do negócio está sendo impactada caso um teste falhe.

---

## 🗺️ Estrutura dos Cenários (Fluxos de Negócio)

A arquitetura dos testes foi desenhada para espelhar o comportamento real de um consumidor, dividida nos seguintes fluxos principais:

### 1. Fluxo de Autenticação (Acesso)
* **Cenário:** Validação da porta de entrada do usuário.
* **Foco:** Garantir que credenciais válidas permitam o acesso seguro ao catálogo e que tentativas inválidas retornem os bloqueios e mensagens de erro corretas, protegendo o sistema.

### 2. Fluxo de Navegação (Menu e Catálogo)
* **Cenário:** Interação com a vitrine da loja.
* **Foco:** Testar a integridade da interface. Garante que os menus funcionam, que os filtros de produtos respondem corretamente e que o usuário consegue encontrar o que procura sem gargalos visuais.

### 3. Fluxo de Compra (O "Caminho Feliz")
* **Cenário:** A jornada de conversão ponta a ponta.
* **Foco:** É o coração do e-commerce. O teste engloba a seleção de um produto, inserção no carrinho, preenchimento correto dos dados de entrega e a finalização bem-sucedida do checkout. 

### 4. Fluxo de Cancelamento (Desistência)
* **Cenário:** A resiliência do carrinho de compras.
* **Foco:** Simula o comportamento do usuário que muda de ideia. Valida a remoção de itens do carrinho e o cancelamento da jornada durante as etapas de checkout, garantindo que o sistema atualize valores e estoques corretamente sem quebrar.

---

## 🏗️ Como o Projeto está Organizado

Os arquivos de teste refletem a arquitetura dos fluxos de negócio descrita acima:

```bash
cypress/e2e/
  ├── 1-autenticacao.cy.js    # Cenários de Login
  ├── 2-navegacao.cy.js       # Cenários de Menu e Filtros
  ├── 3-jornada-compra.cy.js  # Cenários de Checkout completo
  └── 4-cancelamento.cy.js    # Cenários de desistência
