import { useMemo } from 'react';

export function formatPrice({ amount, currencyCode }) {
    const formatCurrency = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: currencyCode,
    });
    return formatCurrency.format(amount);
}

export function formatVariantPrice({ amount, baseAmount, currencyCode }) {
    const hasDiscount = baseAmount > amount;
    const formatDiscount = new Intl.NumberFormat('en', { style: 'percent' });

    const discount = hasDiscount
        ? formatDiscount.format((baseAmount - amount) / baseAmount)
        : null;

    const price = formatPrice({ amount, currencyCode });
    const basePrice = hasDiscount
        ? formatPrice({ amount: baseAmount, currencyCode })
        : null;

    return { price, basePrice, discount };
}

function usePrice(data) {
    const { amount, baseAmount, currencyCode } = data || {};

    const value = useMemo(() => {
        if (typeof amount !== 'number' || !currencyCode) return '';

        return baseAmount
            ? formatVariantPrice({ amount, baseAmount, currencyCode })
            : formatPrice({ amount, currencyCode });
    }, [amount, baseAmount, currencyCode]);

    return typeof value === 'string'
        ? { price: value, basePrice: null, discount: null }
        : value;
}

export default function Price({ amount, baseAmount, currencyCode }) {
    const { price, basePrice, discount } = usePrice({ amount, baseAmount, currencyCode });

    return (
        <div>
            <span>{price}</span>
            {basePrice && <span> {basePrice}</span>}
            {discount && <span> {discount} OFF</span>}
        </div>
    );
}