//
// !discontuned, use fakers inside Interface files instead
// 
import { faker } from "@faker-js/faker";
export const mockConfig = {
    primitiveValues: {
        xName: faker.person.fullName(),
        Date: faker.date.birthdate(),
        xEmail: faker.internet.email(),
    },
};
