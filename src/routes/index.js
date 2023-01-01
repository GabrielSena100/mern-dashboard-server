import express from 'express'
import clientRoutes from '../routes/client.routes'
import generalRoutes from '../routes/general.routes'
import managementRoutes from '../routes/management.routes'
import salesRoutes from '../routes/sales.routes'

const router = express.Router();

router.use('/client', clientRoutes);
router.use('/general', generalRoutes);
router.use('/management', managementRoutes);
router.use('/sales', salesRoutes);

export default router;

