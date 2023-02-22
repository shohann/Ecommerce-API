module.exports.getSkipAndTake = (page, size) => {
    let take;
    let skip;

    if (!page) page = 1;
    if (!size) size = 2;

    page = parseInt(page);
    size = parseInt(size);

    if (page < 1) page = 1

    take = size;
    skip = (page - 1) * take;

    return {
        take: take,
        skip: skip
    }
};
