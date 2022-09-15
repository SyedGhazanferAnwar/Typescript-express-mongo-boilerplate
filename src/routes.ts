import controllers from './controllers';

export default function routes(app) {
  app.get('/', controllers.heartbeat);
}
