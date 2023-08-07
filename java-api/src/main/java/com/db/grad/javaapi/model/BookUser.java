package com.db.grad.javaapi.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "book_users")
public class BookUser {


    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="book_user_id")
    private int book_user_id;
    @Column(name = "book")
    private String book;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_email", referencedColumnName = "email")
    private User user_email;





    public String getBook() {
        return book;
    }
    public void setBook(String book) {
        this.book = book;
    }

    public int getBook_user_id() {
        return book_user_id;
    }

    public void setBook_user_id(int book_user_id) {
        this.book_user_id = book_user_id;
    }

    public User getUser_email() {
        return user_email;
    }
    public void setUser_email(User user_email) {
        this.user_email = user_email;
    }

    @Override
    public String toString() {
        return "BookUser{" +
                "book='" + book + '\'' +
                ", user='" + user_email + '\'' +
                '}';
    }
}
