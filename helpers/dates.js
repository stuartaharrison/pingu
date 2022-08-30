const enumerateDaysBetweenDates = (startDate, endDate) => {
    var now = startDate.clone();
    var dates = [];

    while (now.isSameOrBefore(endDate)) {
        dates.push(now.format('YYYY-MM-DD'));
        now.add(1, 'days');
    }

    return dates;
};

module.exports = {
    enumerateDaysBetweenDates
};