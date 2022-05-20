const sumFunction = async(...data) => {
    return data.reduce((accumulator, nextValue) => accumulator + nextValue);
};
module.exports = sumFunction;