const subtractFunction = async(...data) => {
    return data.reduce((accumulator, nextValue) => accumulator - nextValue);
};
module.exports = subtractFunction;