package com.meiliu.ecommerce.dao;

import com.meiliu.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.RequestParam;

//@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product, Long> {
    //query method by category id
    //behind the scenes, Spring will execute a query similar to this :
    // SELECT * FROM PRODCUT WHERE CATEGORY_ID = ?
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);

    /**
     * Also, Spring Data REST automatically exposes endpoint:
     * http://localhost:8080/api/products/search/findByCategoryId?id=2
     */

    Page<Product> findByNameContaining(@RequestParam("name") String name, Pageable pageable);


}













