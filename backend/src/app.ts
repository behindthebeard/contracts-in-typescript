import cors from 'cors';
import express, {
  Request as ExRequest,
  Response as ExResponse,
  json,
  urlencoded,
} from 'express';
import swaggerUi from 'swagger-ui-express';

import { RegisterRoutes } from '../build/routes';

export const app = express();

app.use(cors());

app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import('../build/swagger.json')),
  );
});

app.use(
  urlencoded({
    extended: true,
  }),
);
app.use(json());

RegisterRoutes(app);
