// Only cover very basic patterns, not to make this a stopper for user input.
// Not to use regex, since it can get way too hard to read and debug.
export function isEmailValid(email) {
    // minimum length (w@w.w) is 5
    if (!email || email.length < 5) {
        return false;
    }
    // has to have a "@" and ".".
    if (!email.includes("@") || !email.includes(".")) {
        return false;
    }
    // no "..".
    if (email.includes("..")) {
        return false;
    }
    // 1 and only 1 "@".
    if (email.split("@").length !== 2) {
        return false;
    }
    const [id, domain] = email.split("@");
    // id and domain, not start or end wth . or @.
    if (
        id.length === 0 ||
        domain.length === 0 ||
        (id.charAt(0) === "." || id.charAt(id.length - 1) === ".") ||
        (domain.charAt(0) === "." || domain.charAt(domain.length - 1) === ".") ||
        domain.includes(" ")
    ) {
        return false;
    }
    return true;
}

// Allows a list: "email1@w.com, email2@w.com"
export function isEmailInputValid(emailInput) {
    if (emailInput.includes(",")) {
        const emailList = emailInput.split(",");
        for (let i = 0; i < emailList.length; i++) {
            if (!isEmailValid(emailList[i].trim())) {
                return false;
            }
        }
        return true;
    } else {
        return isEmailValid(emailInput);
    }
}