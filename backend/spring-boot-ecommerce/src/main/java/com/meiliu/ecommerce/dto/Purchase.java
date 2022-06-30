package com.meiliu.ecommerce.dto;

import com.meiliu.ecommerce.entity.Address;
import com.meiliu.ecommerce.entity.Customer;
import com.meiliu.ecommerce.entity.Order;
import com.meiliu.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}












