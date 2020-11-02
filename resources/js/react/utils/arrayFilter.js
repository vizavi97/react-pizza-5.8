export const arrayFilter = arr => {
    const result = arr.reduce((acc, item) => {
        acc[`${item.id}`] = (acc[`${item.id}`] || []);
        acc[`${item.id}`].push(item);
        return acc;
    }, {});
    return Object.values(result)
};
