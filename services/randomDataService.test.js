const { randomDataService, randomDataServiceById } = require('./randomDataService');

jest.mock('./randomDataService');

describe("Random Data Service Tests", () => {
    test("As a user I should return 10 testimonials", async () => {
        // use async / await because jest is on a timer, 
        // so mock the service when you call the external API live
        const result = await randomDataService();
        expect(result.data).toHaveLength(10);
        expect(result.data[3].id).toEqual(4);
        expect(result.data[3].name).toEqual("Kylie Lutz");
        expect(result.data[3].location).toEqual("Paris, France");
        expect(result.data[3].designation).toEqual("Freelancer");
    });

    test("As a user I should return a testimonial object by Id", async () => {
        const result = await randomDataServiceById(1);
        expect(result.data.id).toEqual(1)
        expect(result.data.name).toEqual("Lance Jarvis");
        expect(result.data.location).toEqual("London, UK");
        expect(result.data.designation).toEqual("General Manager ");

    });
});