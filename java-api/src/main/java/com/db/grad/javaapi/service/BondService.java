package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.repository.BondRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BondService {
    public List<Bond> getAllBonds();

//    public List<Bond> getAllBondsForSpecificUser(Bond bond);
}
