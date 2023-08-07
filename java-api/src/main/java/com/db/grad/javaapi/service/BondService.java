package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.BondRepository;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public interface BondService {
    public List<Bond> getAllBonds();

    public List<Bond> getAllBondsForSpecificUser(User user);

    public List<Bond> returnBondsWithinFiveDays(User user, Date earlierDate, Date laterDate);

    List<Bond> maturedLastFiveDays(User user, Date earlierDate, Date currentDate);

    List<Bond> dueToday(User user, Date date);

    List<Bond> getBondByISIN(User user, String isin);

    List<Bond> getBondByCUSIP(User user, String cusip);
}
