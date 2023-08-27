export interface ISecretaryController {
  // patient methods
  getPatients(req: any, res: any): void;
  addPatient(req: any, res: any): void;
  deletePatient(req: any, res: any): void;
  updatePatient(req: any, res: any): void;

  // appointment methods
  makeAppointment(req: any, res: any): void;
  getAppointments(req: any, res: any): void;
  deleteAppointment(req: any, res: any): void;
  updateAppointment(req: any, res:any):void;
  
  markAppointmentSuccess(req: any, res:any):void;  
  markAppointmentFailed(req: any, res:any):void;  
  markAppointmentWaiting(req: any, res:any):void;  
}
