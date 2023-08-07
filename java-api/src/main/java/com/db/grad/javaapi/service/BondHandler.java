package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.BondRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class BondHandler implements BondService {

    @Autowired
    private BondRepository itsBondRepo;

    @Autowired
    public BondHandler( BondRepository bondRepo )
    {
        itsBondRepo = bondRepo;
    }

    @Override
    public List<Bond> getAllBonds() {
        return itsBondRepo.findAll();
    }

    @Override
    public List<Bond> getAllBondsForSpecificUser(User user) {
        return itsBondRepo.findAllForSpecificUser(user);
    }

    @Override
    public List<Bond> returnBondsWithinFiveDays(User user, Date earlierDate, Date laterDate) {
        return itsBondRepo.withinFiveDays(user, earlierDate, laterDate);
    }

    @Override
    public List<Bond> maturedLastFiveDays(User user, Date earlierDate, Date currentDate) {
        return itsBondRepo.maturedLastFiveDays(user, earlierDate, currentDate);
    }

    @Override
    public List<Bond> dueToday(User user, Date date) {
        return itsBondRepo.dueToday(user, date);
    }

    @Override
    public List<Bond> getBondByISIN(User user, String isin) {
        return itsBondRepo.getBondByISIN(user, isin);
    }

    @Override
    public List<Bond> getBondByCUSIP(User user, String cusip) {
        return itsBondRepo.getBondByCUSIP(user, cusip);
    }
}
