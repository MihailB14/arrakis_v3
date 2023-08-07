import React from 'react'
import {useState} from 'react'

const ClientFilter = () => {
    //need to actually call for clients
    const clients = ["Client1", "Client2", "Client3"]
    const[chosenClient, setChosenClient] = useState(clients[0])
    
    const handleClientChange = (event) => {
        setChosenClient(event.target.value)
    }
    return (
    <div>
        <p>Client Filter</p>
        <select id="clients"onChange={handleClientChange}>
            {clients.map(client =>
            <option value={client}>{client}</option>
            )}
        </select>
    </div>
  
    
  )
}

export default ClientFilter