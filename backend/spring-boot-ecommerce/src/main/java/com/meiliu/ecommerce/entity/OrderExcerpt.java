package com.meiliu.ecommerce.entity;

import org.springframework.data.rest.core.config.Projection;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;

@Projection(name = "embedItem", types = { Order.class })
public interface OrderExcerpt {
    Long getId();

    String getOrderTrackingNumber();

    int getTotalQuantity();

    BigDecimal getTotalPrice();

    String getStatus();

    Date getDateCreated();

    Date getLastUpdated();

    Set<OrderItemInfo> getOrderItems();

    CustomerInfo getCustomer();

    AddressInfo getShippingAddress();

    interface OrderItemInfo {
        Long getId();

        String getImageUrl();

        BigDecimal getUnitPrice();

        int getQuantity();

        Long getProductId();

    }

    interface CustomerInfo {
        Long getId();

        String getFirstName();

        String getLastName();

        String getEmail();
    }

    interface AddressInfo {

        Long getId();

        String getStreet();

        String getCity();

        String getState();

        String getCountry();

        String getZipCode();
    }
}
