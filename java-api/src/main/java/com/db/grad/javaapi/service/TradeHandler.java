package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TradeHandler implements TradeService {
    private TradeRepository itsTradeRepo;

    @Autowired
    public TradeHandler( TradeRepository bondRepo )
    {
        itsTradeRepo = bondRepo;
    }

    @Override
    public List<Trade> getAllTrades() {
        return itsTradeRepo.findAll();
    }

    public Trade addTrade(Trade trade) {
        return null;
    }

    public Trade updateTradeDetails(Trade tradeDetails) {
        return null;
    }

    public boolean removeTrade(Long id) {
        return false;
    }

    public Trade getTradeById(Long id) {
        return null;
    }
}
