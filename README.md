# 🚀 CodeFactory Solutions - Plataforma Central de Serviços

Este repositório contém a solução proposta para modernização e adoção da **Cultura DevOps** na empresa **CodeFactory Solutions**, resolvendo problemas de padronização, onboarding lento e automação de entregas.

---

## 🎯 Objetivo do Projeto
Padronizar o ambiente de desenvolvimento e entrega contínua através de:
- Versionamento com **Git & GitHub** utilizando branches estruturadas (`main`, `develop`, `features`).
- Isolamento e portabilidade via **Docker**.
- Validação contínua através de **GitHub Actions** (CI Pipeline).
- Gestão centralizada com **Issues, Milestones, Projects e Wiki**.

---

## 🛠️ Tecnologias Utilizadas
- **Runtime:** Node.js (v18+)
- **Framework Web:** Express.js
- **Testes Automatizados:** Jest & Supertest
- **Containers:** Docker & Docker Compose
- **Integração Contínua (CI):** GitHub Actions

---

## 📂 Estrutura de Diretórios
```text
codefactory-devops/
├── .github/
│   └── workflows/
│       └── ci-pipeline.yml
├── src/
│   ├── app.js
│   └── app.test.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md