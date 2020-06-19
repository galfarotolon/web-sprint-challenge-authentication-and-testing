//get jokes list test


const supertest = require("supertest");

const server = require("../api/server");



describe("users-router.js", () => {

    // test 1- returns 401 because route is restriced without credentials

    describe("GET /", () => {
        it("should return 401 because no credentials", () => {
            return supertest(server)
                .get("/api/jokes")
                .then(res => {

                    expect(res.status).toBe(401);

                });
        });


    })

    //test 2 - checks what error message comes back

    it("should return an error message", () => {
        return supertest(server)
            .get("/api/jokes")
            .then(res => {

                expect(res.body.message).toBe('please provide credentials to access the dad jokes API')
            });
    });
});