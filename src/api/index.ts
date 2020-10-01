import { Router }            from 'express';
import { rootPageHandler }   from '../handlers/root-page';
import { getIndexesHandler } from '../handlers/indexes';
import { fillSquare }        from '../handlers/fill-square';


const router = Router();

router.get('/', rootPageHandler);

router.get('/indexes', getIndexesHandler);

router.get('/fill-square', fillSquare);

export default router;