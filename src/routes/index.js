import express from 'express'
import clientRoutes from '../routes/client.routes.js'
import generalRoutes from '../routes/general.routes.js'
import managementRoutes from '../routes/management.routes.js'
import salesRoutes from '../routes/sales.routes.js'

const router = express.Router();

router.use('/client', clientRoutes);
router.use('/general', generalRoutes);
router.use('/management', managementRoutes);
router.use('/sales', salesRoutes);

export default router;

