<h1>Teste API com Crawler</h1>
<p>Este projeto tem como objetivo de avaliação para a empresa DevNology, desenvolvido pelo candidato Tiago Honorio.</p>
<h3>Tecnologias Usadas</h3>
Typescript com Node.js<br>
Framework Express para rotas das APIs<br>
Crawler e Curl (cheerio, axios)<br>
Swagger documentação APIs<br>
Framework Docker compose para conteinerização<br>
<h3>Porta usada</h3>
3000 Back-end API<br>
<h3>Passo a passo para iniciar o projeto</h3>
<h4>1° Clone o projeto</h4>
<pre>
git clone git@github.com:20100000/test_devnology.git<br/>
cd api_typescript_test
</pre>
<h4>2° Iniciar contanier </h4>
<pre>
docker compose up --build ou docker-compose up --build

</pre>
Para verificar container.
<pre>docker ps</pre>
<h4>Casa deseja iniciar projeto sem docker add comandos detro do diretorio test_devnology</h4>
<pre>
npm run build <br>
npm run start
</pre>

<h4>3° Para teste API de busca noteBooks</h4>
<pre>http://localhost:3000/api-docs/ ou http://localhost:3000/crawler/lenovo</pre>
<p>A busca por notebook pode ser variavel ex:<br> http://localhost:3000/crawler/<strong>lenovo</strong> ou http://localhost:3000/crawler/<strong>hp</strong></p>
<h4>Para usar Crawler sendo consumido por outro serviço.
<pre>
  Importe o crawler e assinatura Ex:
  import { crawlerProcess } from '../lib/crawler.lib.js'
  Use o methodo crawlerProcess e passe dois parametros obrigatorios url que é o link da pagina<br> como string e titulo do notebook como uma string também o mesmo serve como filtro de busca Ex:
  const notebooks:any = await crawlerProcess('https://webscraper.io/test-sites/e-commerce/static/computers/laptops?page=', 'Lenovo')

</pre>
<br>
Mail: tiago_honorio2010@hotmail.com