import { faker } from "@faker-js/faker";
export const IPatientFaker = () => {
    return {
        name: faker.person.fullName(),
        birth_day: faker.date.birthdate(),
        email: faker.internet.email(),
    };
};
