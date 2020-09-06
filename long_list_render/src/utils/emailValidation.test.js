import { isEmailInputValid, isEmailValid } from "./emailValidation";

const validEmailAddresses = [
    "AFE Dev Team <afe.dev.team@email.wal-mart.com>",
    "Denys.Radchenko@walmart.com, Pavlo.Yeremenko@walmart.com, Oleksandr.Komendant@walmart.com, Illia.Kuznietsov@walmart.com",
    "George.Petev@walmartlabs.com,YLu@walmartlabs.com,David.Cai@walmartlabs.com,Brian.Conrey@walmartlabs.com, Fred.Goya@walmartlabs.com,YZhang3@walmartlabs.com",
    "devops-support@asda.co.uk",
    "DRS-SIM-Platform <drssimplatform@email.wal-mart.com>",
    "E-Congo Team - Bentonville <E-CongoTeam-Bentonvi@email.wal-mart.com>",
    "EDF_Architects <edf-architects@email.wal-mart.com>",
    "email@example.com",
    "firstname.lastname@example.com",
    "email@subdomain.example.com",
    "1234567890@example.com",
    "email@example-one.com",
    "_______@example.com",
    "email@example.name",
    "email@example.museum",
    "email@example.co.jp",
    "firstname-lastname@example.com",
    "\"email\"@example.com",
    "email@123.123.123.123",
    "email@111.222.333.44444",
    "firstname+lastname@example.com",
    "Joe Smith <email@example.com>",
    "much.”more\\ unusual”@example.com",
];

const invalidEmailAddresses = [
    "plainaddress",
    "email@example.com (Joe Smith)",
    "”(),:;<>[\\]@example.com",
    "#@%^%#$@#$@#.com",
    "email@example@example.com",
    "email.@example.com",
    "@example.com",
    "test@",
    "email.example.com",
    ".email@example.com",
    "email..email@example.com",
    "email@example",
    "email@example..com",
    "Abc..123@example.com",
    "test@, @example.com",
    "test@test.com, @example.com",
    "test@test.com, .email@example.com",
    "test@test..com, test@example.com",
    "test@test.com., test@example.com",
    "test@test.com, email@example.com (Joe Smith), test@example.com"
];

/*
Invalid, but we want to error on the loose side.
    "あいうえお@example.com",
    "email@-example.com",
    "”(),:;<>[\\]@example.com",
    "just”not”right@example.com",
    "this\\ is\"really\"not\\allowed@example.com"
*/
describe("DistributionList", () => {

    it("Validates valid email address to true", () => {
        validEmailAddresses.filter(input => !input.includes(",")).forEach(addr => {
            expect(isEmailValid(addr)).toBe(true);
        })
    });

    it("validates invalid email address to false", () => {
        invalidEmailAddresses.filter(input => !input.includes(",")).forEach(addr => {
            console.log(addr);
            expect(isEmailValid(addr)).toBe(false);
        })
    });

    it("Validates valid email list to true", () => {
        validEmailAddresses.forEach(input => {
            expect(isEmailInputValid(input)).toBe(true);
        })
    });

    it("Validates invalid email list to fase", () => {
        invalidEmailAddresses.forEach(input => {
            console.log(input);
            expect(isEmailInputValid(input)).toBe(false);
        })
    });

});
