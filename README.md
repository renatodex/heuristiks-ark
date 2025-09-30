# 🏛️ Arca das Heurísticas

Um catálogo elegante e visual de heurísticas de programação e áreas técnicas, mas que são úteis para **todas as pessoas e profissões**.

![Design Retro Mega Drive](https://img.shields.io/badge/Design-Retro_Mega_Drive-8b5cf6?style=for-the-badge)
![React Router](https://img.shields.io/badge/React_Router-7-06b6d4?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge)

## 🎨 Design

Design retro inspirado no **Mega Drive**, com visual escuro, elegante, linhas simples e cores vibrantes. Cada heurística tem uma página própria e link compartilhável.

## ✨ Funcionalidades

- 📚 **28+ Heurísticas catalogadas** com informações completas
- 🎯 **Categorias:** Complexidade, Gestão, Design de Código, Arquitetura, Trabalho em Equipe
- 🔗 **Páginas individuais** para cada heurística com link compartilhável
- 📱 **Compartilhamento social** (Twitter, Facebook, LinkedIn, WhatsApp, Instagram, TikTok)
- 🎨 **Design responsivo** e elegante
- 🔍 **Filtros por categoria**
- 💡 **Explicação ELI5** (Explain Like I'm 5) para cada conceito
- 🎓 **Explicação detalhada** para aprofundamento
- 🔗 **Heurísticas relacionadas** interconectadas
- 🎥 **Links para vídeos** no YouTube

## 🚀 Tecnologias

- **React Router 7** - Framework moderno para aplicações React
- **Tailwind CSS 4** - Estilização com utility-first
- **React Icons** - Ícones elegantes
- **Vite** - Build tool ultra-rápido

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/heuristics-ark.git

# Entre na pasta
cd heuristics-ark

# Instale as dependências
npm install
```

## 🔥 Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

## 📖 Heurísticas Catalogadas

### Complexidade
- Cognitive Complexity
- Cyclomatic Complexity
- Code Churn
- Change Amplification

### Gestão
- Bike Shedding
- Parkinson's Law
- Brooks' Law
- Pareto Principle

### Design de Código
- SOLID Principles (SRP, OCP, LSP, ISP, DIP)
- Overengineering
- Shotgun Surgery
- Data Clumps
- Primitive Obsession
- Temporal Coupling
- Principle of Least Astonishment

### Arquitetura
- Idempotência
- Conway's Law
- Ubiquitous Language

### Trabalho em Equipe
- Bus Factor
- Knowledge Silos

## 🎯 Estrutura do Projeto

```
app/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── HeuristicCard.jsx
├── data/               # Dados das heurísticas
│   └── heuristics.js
├── routes/             # Páginas
│   ├── home.jsx        # Página inicial
│   ├── heuristic.jsx   # Página individual
│   └── about.jsx       # Sobre o criador
├── styles.css          # Estilos customizados
└── root.tsx            # Layout principal
```

## 📝 Adicionando Novas Heurísticas

Para adicionar uma nova heurística, edite o arquivo `app/data/heuristics.js`:

```javascript
{
  id: 'nome-da-heuristica',
  title: 'Nome da Heurística',
  subtitle: 'Breve descrição',
  category: 'complexity', // ou management, design, architecture, team
  icon: 'FaBrain', // Nome do ícone do react-icons/fa
  shortDescription: 'Descrição curta',
  inventor: 'Nome do Inventor',
  year: '2024',
  history: 'História completa...',
  purpose: 'Para que serve...',
  eli5: 'Explicação simples...',
  detailed: 'Explicação detalhada...',
  relatedHeuristics: ['id-outra-heuristica'],
  youtubeVideos: [
    { title: 'Título do vídeo', url: 'https://youtube.com/...' }
  ],
}
```

## 🎨 Cores do Tema

- **Roxo Principal:** `#8b5cf6`
- **Ciano:** `#06b6d4`
- **Rosa:** `#ec4899`
- **Amarelo:** `#fbbf24`
- **Verde:** `#10b981`
- **Fundo Escuro:** `#0a0a0f`
- **Fundo Mais Escuro:** `#050508`

## 👨‍💻 Criador

Criado com 💜 por **[Renato Alves](https://r-labs.dev)** @ [r-labs.dev](https://r-labs.dev)

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sugestões de novas heurísticas, melhorias no design ou correções são muito apreciadas.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaHeuristica`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova heurística'`)
4. Push para a branch (`git push origin feature/NovaHeuristica`)
5. Abra um Pull Request

## 📄 Licença

MIT

---

**Arca das Heurísticas** - Conhecimento poderoso para todos 🏛️✨
