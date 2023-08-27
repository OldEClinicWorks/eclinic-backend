import { ISecretaryController } from "../Contracts/Controllers/ISecretaryController.js";
import { IPatient, IPatientFaker } from "../Contracts/Models/IPatient.js";

// implement secretary interface
export const SecretaryController: ISecretaryController = {
  // patient methods
  getPatients(req: any, res: any) {
    let patients = [];
    for (let i = 0; i < 5; i++) {
      const mockPatient: IPatient = IPatientFaker();      
      patients.push(mockPatient);
    }
    return res.status(200).json({ patients });
  },
  addPatient(req: any, res: any): void {
    return res.status(200).json({
      message: "patient was added successfully.",
    });
  },
  deletePatient(req: any, res: any): void {},
  updatePatient(req: any, res: any): void {},

  // appointment methods
  makeAppointment(req: any, res: any): void {},
  getAppointments(req: any, res: any): void {},
  deleteAppointment(req: any, res: any): void {},
  updateAppointment(req: any, res: any): void {},

  // appointment status
  markAppointmentSuccess(req: any, res: any): void {},
  markAppointmentFailed(req: any, res: any): void {},
  markAppointmentWaiting(req: any, res: any): void {},
};
