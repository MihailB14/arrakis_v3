package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BooksRepository extends JpaRepository<Book, String>
{
    @Query(nativeQuery = true, value = "select * from books where book_number = :bookNumber")
    List<Book> findByNumber(String bookNumber);
}