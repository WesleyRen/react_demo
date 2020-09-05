function isEmailValid(email) {
    // minimum length (w@w.w) is 5
    if (!email || email.length < 5) {
        return false;
    }
    // not starting or ending with a dot.
    if (email.charAt(0) === "." || email.charAt(email.length - 1) === ".") {
        return false;
    }
    // no ".@" or "..".
    if (email.includes(".@") || email.includes("..")) {
        return false;
    }
    // This basically validates email format of /\S+@\S+\.\S+/.test(email)
    // But also make sure there is no "@" before or after "@".
    let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (isValid) {
        const id = email.split("@")[0];
        const domain = email.split("@")[1];
        const isIdValid = /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)/.test(id);
        const isDomainValid = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(domain);
        return isIdValid && isDomainValid;
    }
    return false;
}

const validEmailAddresses = [
    "email@example.com",
    "firstname.lastname@example.com",
    "email@subdomain.example.com",
    "firstname+lastname@example.com",
    "email@123.123.123.123",
    "email@[123.123.123.123]",
    "\"email\"@example.com",
    "1234567890@example.com",
    "email@example-one.com",
    "_______@example.com",
    "email@example.name",
    "email@example.museum",
    "email@example.co.jp",
    "firstname-lastname@example.com"
];
/*
Following technically are valid, but my method will fail. I do not see them as possible cases in our use case
    "much.”more\\ unusual”@example.com",
    "very.unusual.”@”.unusual.com@example.com",
    "very.”(),:;<>[]”.VERY.”very@\\\\ \"very”.unusual@strange.example.com"
 */

const invalidEmailAddresses = [
    "plainaddress",
    "#@%^%#$@#$@#.com",
    "@example.com",
    "Joe Smith <email@example.com>",
    "email.example.com",
    "email@example@example.com",
    ".email@example.com",
    "email.@example.com",
    "email..email@example.com",
    "email@example.com (Joe Smith)",
    "email@example",
    "email@-example.com",
    "email@111.222.333.44444",
    "email@example..com",
    "Abc..123@example.com",
    "”(),:;<>[\\]@example.com",
    "just”not”right@example.com",
];

/*
Invalid, but not to worry for now:
    "あいうえお@example.com",
    "email@example.web",
    "this\\ is\"really\"not\\allowed@example.com"
 */
describe("DistributionList", () => {

    it("Validates valid email addresses to true", () => {
        validEmailAddresses.forEach(addr => {
            console.log(addr);
            expect(isEmailValid(addr)).toBe(true);
        })
    });

    it("validates invalid email addresses to false", () => {
        invalidEmailAddresses.forEach(addr => {
            console.log(addr);
            expect(isEmailValid(addr)).toBe(false);
        })
    });
});