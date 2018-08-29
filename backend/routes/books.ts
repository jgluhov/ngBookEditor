import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  fs.readFile(path.resolve(__dirname, '..', 'assets/books.json'), 'utf-8', (err, data) => {
    res.json(JSON.parse(data));
  });
});

export default router;
