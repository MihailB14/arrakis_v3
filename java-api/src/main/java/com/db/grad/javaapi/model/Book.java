package com.db.grad.javaapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "books")
public class Book
{
    @Id
    private String bookNumber;

    @Id
    @Column(name = "book_number", nullable = false)
    public String getBookNumber() {
        return bookNumber;
    }
    public void setId(String bookNumber) {
        this.bookNumber = bookNumber;
    }
   
}
