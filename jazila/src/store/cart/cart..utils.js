export function addItemWithQuantity(items, item, quantity) {
    if (quantity <= 0)
        throw new Error("cartQuantity can't be zero or less than zero");

    const existingItemIndex = items.findIndex(
        (existingItem) => existingItem._id === item._id
    );

    if (existingItemIndex > -1) {
        const newItems = [...items];
        newItems[existingItemIndex].quantity =
            (newItems[existingItemIndex].quantity || 0) + quantity;
        return newItems;
    }
    return [...items, { ...item, quantity }];
}

export function removeItemOrQuantity(items, _id, quantity) {
    return items.reduce((acc, item) => {
        if (item._id === _id) {
            const newQuantity = (item.quantity || 0) - quantity;
            return newQuantity > 0
                ? [...acc, { ...item, quantity: newQuantity }]
                : [...acc];
        }
        return [...acc, item];
    }, []);
}

export function addItem(items, item) {
    return [...items, item];
}

export function getItem(items, _id) {
    return items.find((item) => item._id === _id);
}

export function updateItem(items, _id, item) {
    return items.map((existingItem) =>
        existingItem._id === _id ? { ...existingItem, ...item } : existingItem
    );
}

export function removeItem(items, _id) {
    return items.filter((existingItem) => existingItem._id !== _id);
}

export function inStock(items, _id) {
    const item = getItem(items, _id);
    if (item) return (item.quantity || 0) < (item.stock || 0);
    return false;
}

export const calculateItemTotals = (items) =>
    items.map((item) => ({
        ...item,
        itemTotal: item.sale_price * (item.quantity || 0),
    }));

export const calculateTotal = (items) =>
    items.reduce((total, item) => total + (item.quantity || 0) * item.sale_price, 0);

export const calculateTotalItems = (items) =>
    items.reduce((sum, item) => sum + (item.quantity || 0), 0);

export const calculateUniqueItems = (items) => items.length;