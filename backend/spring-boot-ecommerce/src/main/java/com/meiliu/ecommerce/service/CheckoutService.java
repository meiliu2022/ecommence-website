package com.meiliu.ecommerce.service;

import com.meiliu.ecommerce.dto.PaymentInfo;
import com.meiliu.ecommerce.dto.Purchase;
import com.meiliu.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;

}
