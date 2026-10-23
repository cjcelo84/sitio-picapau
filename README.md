# 🌽 Peça Teatral: Aventuras no Sítio do Picapau Amarelo

Uma página web moderna, única (*single-page*), lúdica e totalmente responsiva criada para a divulgação oficial da peça teatral escolar inspirada na obra imortal de **Monteiro Lobato**, encenada com carinho e talento pelos estudantes do **8º Ano**.

---

## 🎨 Identidade Visual e Estilo

- **Paleta Temática do Sítio:**
  - 🌿 **Verde Folha:** tons acolhedores de natureza, remetendo ao pomar e ao capoeirão.
  - ☀️ **Amarelo Vivo:** caloroso e vibrante como as manhãs do sítio.
  - 🎀 **Toques de Vermelho:** inspirados no laço da Emília, nas frutas do pomar e na energia da turminha.
- **Tipografia Lúdica e Acolhedora:** Google Fonts (*Fredoka* para títulos arredondados e amigáveis; *Nunito* para leitura fluida em qualquer dispositivo).
- **Design 100% Responsivo:** Otimizado com perfeição tanto para telas de celulares e tablets quanto para computadores e telões.

---

## 📑 Estrutura e Seções do Site

1. **Cabeçalho (Hero):**
   - Título marcante: *Peça Teatral: Aventuras no Sítio do Picapau Amarelo*.
   - Subtítulo convidativo para pais, alunos, professores e toda a comunidade escolar.
   - Botões de ação com rolagem suave (*smooth scroll*) para os Horários e o Texto de Abertura.
   - Destaque dos **dois turnos na Quadra da escola**.
   - Ilustração de abertura do Sítio com selo comemorativo de *Entrada Franca*.

2. **Texto de Abertura (Sobre o Espetáculo):**
   - Texto de abertura que convida pais e alunos a reviverem memórias de infância através de uma pitada de mistério: a vaidade da Cuca, a pílula mágica do Sítio e as confusões com o ajudante Pesadelo na floresta.
   - Pílulas com destaques: Local (Quadra), Dois Turnos, Classificação Livre e Gratuidade.

3. **Personagens / Quem é Quem:**
   - Cards ilustrados com retratos dos 11 personagens principais e os alunos atores:
     - 🧵 **Emília:** Helena Dias & Leticia Venera
     - 🌽 **Visconde de Sabugosa:** Bernardo & Henrique
     - 👒 **Narizinho (Lúcia):** Maria Clara & Pietra
     - 🌳 **Pedrinho:** Gustavo Daiti & Davi
     - 📖 **Dona Benta:** Alice & Nicole
     - 🥞 **Tia Nastácia:** Mariana Vicari
     - 🪓 **Tio Barnabé:** Pedro
     - 🌽 **Rabicó:** Gustavo Ávila
     - 🌪️ **Saci:** Nicolas
     - 🐊 **Cuca:** Gabriela
     - 🦇 **Pesadelo:** Felipe
   - Citações famosas, características e biografias resumidas.

4. **Data, Horários dos Turnos e Local:**
   - **Data Oficial:** **Sábado, 7 de Novembro de 2026**.
   - Bloco estilo bilhete de teatro com os **dois turnos**:
     - **1º Turno:** 09:40 às 10:40 (Manhã)
     - **2º Turno:** 10:40 às 12:40 (Manhã / Meio-Dia)
   - Localização destacada: **Quadra** (Quadra da Escola – Colégio Anglo Leonardo da Vinci, Rua Euclídes da Cunha, nº 377, Centro, Osasco – SP).
   - **Botões interativos:** *Como Chegar (Google Maps)*, *Adicionar ao Google Agenda* e *Baixar Lembrete no Celular (.ics)*.

5. **Bastidores / Galeria:**
   - Fotografias dos ensaios no palco, pintura e cenografia, confecção dos figurinos e perucas, e a roda de concentração do elenco.
   - **Visualizador Lightbox:** Clique em qualquer foto para ampliar com legenda e detalhes.

6. **Área Interativa:**
   - ✏️ **Desenho para Colorir Oficial:** Botão para baixar a imagem ou imprimir diretamente em folha A4.
   - 🎯 **Quiz do Sítio:** "Qual personagem do Sítio é você?" com resultado dinâmico na tela.

7. **Rodapé:**
   - Mensagem afetuosa de boas-vindas do 8º Ano.
   - Aviso de gratuidade e agradecimento à comunidade escolar e coordenação pedagógica.

---

## 🚀 Como Publicar no GitHub Pages (Passo a Passo)

Este repositório já foi inicializado com `git init` e seu primeiro commit foi realizado. Para publicar seu site e torná-lo acessível na internet:

### 1. Crie um novo repositório no seu GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Escolha o nome para o repositório: `peca-sitio-picapau`.
3. Deixe o repositório marcado como **Público** (*Public*).
4. **Não marque** as opções de adicionar README ou .gitignore (já criamos todos para você).
5. Clique em **Create repository**.

### 2. Vincule e envie o código pelo terminal
No terminal dentro desta pasta, execute os seguintes comandos (substituindo `SEU-USUARIO` pelo seu nome de usuário no GitHub):

```bash
# 1. Definir o ramo principal como 'main'
git branch -M main

# 2. Conectar com o seu repositório no GitHub (troque SEU-USUARIO pelo seu usuário)
git remote add origin https://github.com/SEU-USUARIO/peca-sitio-picapau.git

# 3. Enviar os arquivos
git push -u origin main
```

### 3. Ativar o GitHub Pages
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment > Source**, selecione `Deploy from a branch`.
4. Em **Branch**, selecione `main` e a pasta `/(root)`, depois clique em **Save**.
5. Aguarde cerca de 1 a 2 minutos. O GitHub gerará o link oficial do seu site:
   `https://SEU-USUARIO.github.io/peca-sitio-picapau/`

Pronto! Qualquer pessoa com o link poderá acessar a página no computador ou celular!

---

## 💻 Como Visualizar Localmente no Computador

Você pode simplesmente dar dois cliques no arquivo `index.html` para abrir diretamente no seu navegador, ou se preferir rodar um servidor local com Node.js:

```bash
# Usando npx serve
npx -y serve .
```

---

*Desenvolvido com carinho para o Espetáculo Teatral Escolar do 8º Ano • 2026*
