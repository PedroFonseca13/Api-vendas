import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
	return res.json({ message: 'tá rolando, papai' });
});

export default routes;
