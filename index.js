import jsonServe from 'json-serve';
const server = jsonServe.create();
const router = jsonServe.router('bd.json');
const middlewares = jsonServe.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(router);

server.listen(port)
