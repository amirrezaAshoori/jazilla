import isEmpty from 'lodash/isEmpty';

export function generateCartItem(item, variation) {
    if (!isEmpty(variation)) {
        return {
            _id: `${item?._id}.${variation._id}`,
            productId: item?._id,
            name: `${item?.name} - ${variation.title}`,
            slug: item?.slug,
            unit: item?.unit,
            stock: variation.quantity,
            price: variation.price,
            sale_price: variation.sale_price,
            image: item?.image,
            variationId: variation._id,
        };
    }

    return {
        _id: item?._id,
        name: item?.name,
        slug: item?.slug,
        unit: item?.unit,
        image: item?.image,
        stock: item?.quantity,
        price: item?.price,
        sale_price: item?.sale_price,
    };
}