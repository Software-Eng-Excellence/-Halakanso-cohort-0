describe("example suit",()=>{
    beforeAll(() => {
        console.log("beforeAll");
    });

    beforeEach(() => {
        console.log("beforeEach");
    });

    afterEach(() => {
        console.log("afterEach");
    });

    afterAll(() => {
        console.log("afterAll");
    });

    it("should run a test", () => {
        console.log("test");
    });
    it("should run another test", () => { 
        console.log("test");
    });
    it("should run a third test", () => {
        console.log("test");
    });
});