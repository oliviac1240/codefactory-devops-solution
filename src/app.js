const express = require('express');
const app = express();

app.use(express.json());

// Banco em memória para demonstração
const projects = [
  { id: 1, name: "Portal E-Commerce PME", status: "Em Desenvolvimento", lead: "Dev 1" },
  { id: 2, name: "Sistema de Gestão Clínica", status: "Concluído", lead: "Dev 2" }
];

// Rota de Healthcheck
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    service: 'CodeFactory Solutions Core API'
  });
});

// Listagem de projetos
app.get('/api/projects', (req, res) => {
  res.status(200).json({
    total: projects.length,
    data: projects
  });
});

// Consulta de projeto por ID
app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Projeto não encontrado.' });
  }
  res.status(200).json(project);
});

// Criação de novo projeto
app.post('/api/projects', (req, res) => {
  const { name, lead } = req.body;
  if (!name || !lead) {
    return res.status(400).json({ error: 'Os campos "name" e "lead" são obrigatórios.' });
  }

  const newProject = {
    id: projects.length + 1,
    name,
    status: 'Planejado',
    lead
  };

  projects.push(newProject);
  res.status(201).json(newProject);
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 CodeFactory API rodando na porta ${PORT}`);
  });
}

module.exports = app;