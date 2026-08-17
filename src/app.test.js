const request = require('supertest');
const app = require('./app');

describe('🧪 Suíte de Testes da API CodeFactory', () => {

  describe('GET /health', () => {
    it('deve retornar status 200 e indicar que o serviço está UP', async () => {
      const response = await request(app).get('/health');
      expect(response.statusCode).toBe(200);
      expect(response.body.status).toBe('UP');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /api/projects', () => {
    it('deve listar todos os projetos cadastrados', async () => {
      const response = await request(app).get('/api/projects');
      expect(response.statusCode).toBe(200);
      expect(response.body.data).toBeInstanceOf(Array);
      expect(response.body.total).toBeGreaterThanOrEqual(2);
    });
  });

  describe('GET /api/projects/:id', () => {
    it('deve retornar os detalhes de um projeto existente', async () => {
      const response = await request(app).get('/api/projects/1');
      expect(response.statusCode).toBe(200);
      expect(response.body.id).toBe(1);
      expect(response.body).toHaveProperty('name');
    });

    it('deve retornar 404 para um ID inexistente', async () => {
      const response = await request(app).get('/api/projects/999');
      expect(response.statusCode).toBe(404);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('POST /api/projects', () => {
    it('deve criar um novo projeto com sucesso', async () => {
      const payload = {
        name: "App Mobile Vendas",
        lead: "Dev 3"
      };
      const response = await request(app)
        .post('/api/projects')
        .send(payload);

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(payload.name);
      expect(response.body.status).toBe('Planejado');
    });

    it('deve retornar erro 400 se faltarem campos obrigatórios', async () => {
      const response = await request(app)
        .post('/api/projects')
        .send({ name: "Projeto Incompleto" });

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBeDefined();
    });
  });

});