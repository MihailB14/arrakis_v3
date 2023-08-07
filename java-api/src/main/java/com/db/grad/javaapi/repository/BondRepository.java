package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface BondRepository extends JpaRepository<Bond, String> {
    @Query(nativeQuery = true, value = " select * from bond where bond.ISIN in(select trade.BOND_REFERENCE from trade where trade.BOOK_REFERENCE in (select BOOK from book_users join users on book_users.USER_EMAIL=users.EMAIL where users.EMAIL = :email))")
    List<Bond> findAllForSpecificUser(User email);

    @Query(nativeQuery = true, value = "select * from bond where bond.ISIN in(select trade.BOND_REFERENCE from trade where trade.BOOK_REFERENCE in (select BOOK from book_users join users on book_users.USER_EMAIL=users.EMAIL where users.EMAIL = :email))" +
            " and (BOND_MATURITY_DATE between :earlierDate and :laterDate)")
    List<Bond> withinFiveDays(@Param("email") User email, @Param("earlierDate") Date earlierDate, @Param("laterDate") Date laterDate);
}

//
//drop table if exists userTrades;
//
//        create table userTrades as select trade.BOND_REFERENCE from trade where trade.BOOK_REFERENCE in (select BOOK from book_users join users on book_users.USER_EMAIL=users.EMAIL where users.EMAIL = 'user2@gmail.com');
//
//        select * from bond where bond.ISIN in (select * from userTrades);