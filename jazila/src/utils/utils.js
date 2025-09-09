export const calculateDiscountPercentage = ({ originalPrice, salePrice }) => {
    if (originalPrice > 0 && salePrice > 0) {
        const discount = ((originalPrice - salePrice) / originalPrice) * 100;
        return discount.toFixed(2);
    }

    return salePrice;
};