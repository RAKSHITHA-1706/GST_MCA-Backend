import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'GST & MCA Operations Management API' });
});

export default router;
