package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.TradeRepository;

import java.util.List;

public interface TradeService {
    public List<Trade> getAllTrades();
}
