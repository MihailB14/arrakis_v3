package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Bond;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BondRepository extends JpaRepository<Bond, String> {

//@Query(nativeQuery = true, value = "select * from trade inner join bond on trade.BOND_REFERENCE = bond.ISIN where BOOK_REFERENCE = :ISIN")
//    List<Bond> findAllForSpecificUser(Bond ISIN);
}
