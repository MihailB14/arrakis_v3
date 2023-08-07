package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.service.BondHandler;
import com.db.grad.javaapi.service.BondService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/bond")
@CrossOrigin(origins = "*")
public class BondController {


    private BondService bondService;

    @Autowired
    public BondController(BondService ds)
    {
        bondService = ds;
    }

    @GetMapping()
    public List <Bond> getAllBonds() {
        return bondService.getAllBondsForSpecificUser(new User("user2@gmail.com", "password"));
    }

    @GetMapping("/five-days/{date}")
//    public List<Bond> withinFiveDays(User user, String date) {
    public List<Bond> withinFiveDays(@PathVariable("date") String date) {
        return bondService.returnBondsWithinFiveDays(new User("user2@gmail.com", "password"), //user
                Date.valueOf(LocalDate.parse(date).minusDays(5)), //earlierDate
                Date.valueOf(LocalDate.parse(date).plusDays(5))); //laterDate
    }

    @GetMapping("/matured-last-five-days/{date}")
    public List<Bond> maturedLastFiveDays(@PathVariable("date") String date) {
        return bondService.maturedLastFiveDays(new User("user2@gmail.com", "password"),
                Date.valueOf(LocalDate.parse(date).minusDays(5)),
                Date.valueOf(LocalDate.parse(date)));
    }

    @GetMapping("/due-today/{date}")
    public List<Bond> dueToday(@PathVariable("date") String date) {
        return bondService.dueToday(new User("user2@gmail.com", "password"),
                Date.valueOf(LocalDate.parse(date)));
    }

    @GetMapping("/get-by-isin/{isin}")
    public List<Bond> getBondByISIN(@PathVariable("isin") String isin) {
        return bondService.getBondByISIN(new User("user2@gmail.com", "password"), isin);
    }

    @GetMapping("/get-by-cusip/{cusip}")
    public List<Bond> getBondByCUSIP(@PathVariable("cusip") String cusip) {
        return bondService.getBondByCUSIP(new User("user2@gmail.com", "password"), cusip);
    }



//    @GetMapping("/something")
//    public List<Bond> getAllBondsForSpecificUser(){
//        return bondService.getAllBondsForSpecificUser(new User("user2@gmail.com", "password"));
//    }

//    @GetMapping("/dogs/{id}")
//    public ResponseEntity < Dog > getEmployeeById(@PathVariable(value = "id") Long id)
//            throws ResourceNotFoundException {
//        Dog dogs = dogsService.getDogById(id);
//        return ResponseEntity.ok().body(dogs);
//    }
//
//    @PostMapping("/dogs")
//    public Dog createDog(@Valid @RequestBody Dog dog) {
//        return dogsService.addDog(dog);
//    }
//
//    @PutMapping("/dogs/{id}")
//    public ResponseEntity < Dog > updateDog(@PathVariable(value = "id") Long id,
//                                            @Valid @RequestBody Dog dogDetails) throws ResourceNotFoundException {
//
//        final Dog updatedDogs = dogsService.updateDogDetails(dogDetails);
//        return ResponseEntity.ok(updatedDogs);
//    }
//
//    @DeleteMapping("/dogs/{id}")
//    public Map < String, Boolean > deleteDog(@PathVariable(value = "id") Long id)
//            throws ResourceNotFoundException {
//        boolean removed = dogsService.removeDog(id);
//
//        Map < String, Boolean > response = new HashMap <>();
//        if( removed )
//            response.put("deleted", Boolean.TRUE);
//        else
//            response.put("deleted", Boolean.FALSE);
//
//        return response;
//    }
}
