require('babel-register')({
  presets: ['es2015', 'react'],
});

// Basic server set up
const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 3000
});

// Register inert plugin for serving static pages
// and vision plugin for template rendering
server.register([{
  register: require('inert')
}, {
  register: require('vision')
}], (err) => {

  if (err) throw err;

  // Add server-side React-rendering view engine
  server.views({
    engines: {
      jsx: require('hapi-react-views')
    },
    relativeTo: __dirname,
    path: 'views'
  });

  // Add a route for static assets
  server.route({
    method: 'GET',
    path: '/{param}',
    handler: {
      directory: {
        path: 'public',
        index: ['index.html']
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: {
      view: 'Default'
    }
  });

});

server.start((err) => {

  if (err)  {
    throw err;
  }

  console.log('Server running at:', server.info.uri);

});
