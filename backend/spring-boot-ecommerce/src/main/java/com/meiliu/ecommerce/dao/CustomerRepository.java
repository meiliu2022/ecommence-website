package com.meiliu.ecommerce.dao;

import com.meiliu.ecommerce.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Customer findByEmail(String theEmail);
    //sql statement:
    // SELECT * FROM Customer c WHERE c.email = theEmail
}
