
import { xEmail, xName } from "../../CustomTypes/xTypes";
import { faker } from "@faker-js/faker";

export interface IPatient {
    name:xName, 
    birth_day:Date,
    email:xEmail
}

export const IPatientFaker = ():IPatient=>{
    return {
        name: faker.person.fullName(),
        birth_day: faker.date.birthdate(),
        email: faker.internet.email(),
    }
}