# ?? Teste API com Crawler - DevNology

<p align="center">
  <img src="https://shields.io" alt="TypeScript" />
  <img src="https://shields.io" alt="Node.js" />
  <img src="https://shields.io" alt="Express" />
  <img src="https://shields.io" alt="Docker" />
  <img src="https://shields.io" alt="Swagger" />
</p>

Este projeto foi desenvolvido como um desafio técnico de avaliação para a empresa **DevNology**. A aplicação consiste em uma API REST integrada a um Web Crawler que realiza raspagem de dados de e-commerce e filtra notebooks por marca.

---

## ??? Tecnologias Utilizadas

- **Backend:** Node.js com TypeScript
- **Framework Web:** Express
- **Web Scraping:** Cheerio & Axios
- **Documentação:** Swagger UI
- **Conteinerização:** Docker & Docker Compose

---

## ?? Portas Utilizadas

- `3000`: Porta padrão da API Backend e Documentação.

---

## ?? Como Iniciar o Projeto

### 1. Clonar o Repositório
```bash
git clone git@github.com:20100000/test_devnology.git
cd api_typescript_test
```

### 2. Executar com Docker (Recomendado)
Para buildar e iniciar o container automaticamente, execute:
```bash
docker compose up --build
```
*(Caso use uma versão mais antiga do Docker, utilize `docker-compose up --build`)*

Para verificar se o container está rodando perfeitamente:
```bash
docker ps
```

### 3. Executar Localmente (Sem Docker)
Caso prefira rodar diretamente na sua máquina, instale as dependências e inicie os scripts dentro do diretório raiz:
```bash
npm install
npm run build
npm run start
```

---

## ?? Rotas da API e Testes

Após iniciar o servidor, você poderá interagir com a aplicação através dos seguintes endpoints:


| Tipo | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `http://localhost:3000/api-docs/` | Interface do Swagger com a documentação interativa da API. |
| **GET** | `http://localhost:3000/crawler/lenovo` | Executa o crawler filtrando por notebooks da marca **Lenovo**. |
| **GET** | `http://localhost:3000/crawler/hp` | Executa o crawler filtrando por notebooks da marca **HP**. |

> ?? **Nota:** O parâmetro final da rota `/crawler/:marca` é dinâmico. Você pode testar com diferentes marcas disponíveis no e-commerce alvo.

---

## ?? Uso Interno do Crawler (Como Biblioteca)

Caso queira consumir a lógica do Crawler em outro serviço interno do seu código, basta importar o método e sua assinatura:

```typescript
import { crawlerProcess } from '../lib/crawler.lib.js';

async function buscarDados() {
  // Parâmetros: (urlBase: string, termoDeBusca: string)
  const notebooks = await crawlerProcess(
    'https://webscraper.io', 
    'Lenovo'
  );
  
  console.log(notebooks);
}
```

---

## ?? Contato

Desenvolvido por **Tiago Honorio**  
?? E-mail: [tiago_honorio2010@hotmail.com](mailto:tiago_honorio2010@hotmail.com)
