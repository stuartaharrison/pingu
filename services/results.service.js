const db = require('../configs/database');

const createResultAsync = async (destination, result) => {
    let newEntity = await db.Result.create({
        destination,
        wasReached: result
    });

    return newEntity;
};

module.exports = {
    createResultAsync
};