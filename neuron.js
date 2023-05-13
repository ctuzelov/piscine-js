const toProp = (str) => {
    str = str.toLowerCase();
    if (str[str.length - 1] === "?" || str[str.length - 1] === "!")
        str = str.substr(0, str.length - 1);
    str = str.split(" ").join("_");
    return str;
};
const neuron = (arr) => {
    const res = {};
    arr.forEach((el) => {
        let firstType = el.split(": ")[0];
        let firstItem = el.split(": ")[1].split(" - ")[0];
        let secondItem = el.split(" - ")[1].split(": ")[1];
        let questions = firstType.toLowerCase();
        let property = toProp(firstItem);
        let question = questions.substr(0, questions.length - 1);
        let questionItem = firstItem;
        let responses = "responses";
        let response = secondItem;
        const tmp = {};
        tmp[questions] = res[questions] ? res[questions] : {};
        let prevResponses = [];
        if (res[questions]) {
            if (res[questions][property]) {
                prevResponses.push(...res[questions][property][responses]);
            }
        }
        tmp[questions][property] = {};
        tmp[questions][property][question] = questionItem;
        prevResponses.push(response);
        tmp[questions][property][responses] = prevResponses;
        res[questions] = tmp[questions];
    });
    return res;
};