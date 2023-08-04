package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.repository.BondRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

//    @Override
//    public List<Bond> getAllBondsForSpecificUser(Bond bond) {
//        return itsBondRepo.findAllForSpecificUser(bond);
//    }
}
