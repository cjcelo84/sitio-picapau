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
   - Botão de ação com rolagem suave (*smooth scroll*) para a seção de Datas e Horários.
   - Ilustração de abertura do Sítio com selo comemorativo de *Entrada Franca*.
   - **Contador Regressivo em Tempo Real** até o dia da estreia!

2. **Sobre o Espetáculo (Sinopse):**
   - Texto empolgante narrando a trama onde a Emília, Pedrinho, Narizinho e o Visconde defendem as receitas da Tia Nastácia e os livros do sítio contra as travessuras da Cuca.
   - Pílulas com destaques: duração (60 min), classificação livre, trilha sonora ao vivo e gratuidade.

3. **Personagens / Quem é Quem:**
   - Cards ilustrados com retratos dos 7 personagens principais e os alunos atores:
     - 🧵 **Emília:** Sofia Meireles (8º B)
     - 🌽 **Visconde de Sabugosa:** Lucas Fernandes (8º A)
     - 👒 **Narizinho (Lúcia):** Beatriz Castro (8º A)
     - 🌳 **Pedrinho:** Gabriel Ribeiro (8º B)
     - 📖 **Dona Benta:** Helena Vasconcelos (8º A)
     - 🥞 **Tia Nastácia:** Clara Albuquerque (8º B)
     - 🐊 **Cuca:** Manuela Rocha (8º A)
   - Citações famosas e biografias resumidas.

4. **Datas, Horários e Local:**
   - Bloco estilo bilhete de teatro com as datas das 3 sessões:
     - Sexta-feira (20/Nov) - 14h30 (Sessão Escolar) e 19h00 (Sessão Noturna para Famílias).
     - Sábado (21/Nov) - 16h00 (Sessão de Gala e Encerramento).
   - Localização no **Colégio Anglo Leonardo da Vinci – Unidade Osasco** (Rua Euclídes da Cunha, nº 377, Centro, Osasco – SP). Estacionamento com parceiros na rua (pago).
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
