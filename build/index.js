import 'tslib';
import { PORT } from "./config.js";
import Express from "express";
import { SecretaryController } from "./Controllers/SecretaryController.js";
const app = Express();
const router = Express.Router();
app.use(Express.json());
router.get("/list_patients", SecretaryController.getPatients);
router.post("/add_patient", SecretaryController.addPatient);
app.use('/api', router);
app.listen(PORT, () => {
    console.log(`now listening on port ${PORT}`);
});
