export const SortOrder = {
  Asc: "asc",
  Desc: "desc",
};

export const ProductType = {
  Simple: "simple",
  Variable: "variable",
};

export const ProductStatus = {
  Publish: "publish",
  Draft: "draft",
};

export const PaymentGateway = {
  STRIPE: "STRIPE",
  COD: "CASH_ON_DELIVERY",
  CASH: "CASH",
  FULL_WALLET_PAYMENT: "FULL_WALLET_PAYMENT",
  PAYPAL: "PAYPAL",
  MOLLIE: "MOLLIE",
  RAZORPAY: "RAZORPAY",
  SSLCOMMERZ: "SSLCOMMERZ",
  PAYSTACK: "PAYSTACK",
  XENDIT: "XENDIT",
  IYZICO: "IYZICO",
};

export const OrderStatus = {
  PENDING: "order-pending",
  PROCESSING: "order-processing",
  COMPLETED: "order-completed",
  CANCELLED: "order-cancelled",
  REFUNDED: "order-refunded",
  FAILED: "order-failed",
  AT_LOCAL_FACILITY: "order-at-local-facility",
  OUT_FOR_DELIVERY: "order-out-for-delivery",
};

export const PaymentStatus = {
  PENDING: "payment-pending",
  PROCESSING: "payment-processing",
  SUCCESS: "payment-success",
  FAILED: "payment-failed",
  REVERSAL: "payment-reversal",
  COD: "cash-on-delivery",
  AWAITING_FOR_APPROVAL: "payment-awaiting-for-approval",
};

export const RefundStatus = {
  APPROVED: "Approved",
  PENDING: "Pending",
  REJECTED: "Rejected",
  PROCESSING: "Processing",
};

export const CouponType = {
  FIXED: "fixed",
  PERCENTAGE: "percentage",
  FREE_SHIPPING: "free_shipping",
};
