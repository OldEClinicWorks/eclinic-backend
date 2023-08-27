import { IPatientFaker } from "../Contracts/Models/IPatient.js";
// implement secretary interface
export const SecretaryController = {
    // patient methods
    getPatients(req, res) {
        let patients = [];
        for (let i = 0; i < 5; i++) {
            const mockPatient = IPatientFaker();
            patients.push(mockPatient);
        }
        return res.status(200).json({ patients });
    },
    addPatient(req, res) {
        return res.status(200).json({
            message: "patient was added successfully.",
        });
    },
    deletePatient(req, res) { },
    updatePatient(req, res) { },
    // appointment methods
    makeAppointment(req, res) { },
    getAppointments(req, res) { },
    deleteAppointment(req, res) { },
    updateAppointment(req, res) { },
    // appointment status
    markAppointmentSuccess(req, res) { },
    markAppointmentFailed(req, res) { },
    markAppointmentWaiting(req, res) { },
};
