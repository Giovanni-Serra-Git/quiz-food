import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('./data/questions.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 9000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`);
});
