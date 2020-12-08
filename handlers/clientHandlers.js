const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

// write your handlers here...
const getClientList = (req,res)=>{
    res.status(200).json({
        status: 200,
        data: clients
      });
};

const getClientByID = (req,res)=>{
    let client = clients.filter((client)=>client.id==req.params.id);

    if(client.length ==0){
        res.status(404).json({
            status: 404,
            data: "Error: user not found. Enter a different ID."
        });
    }
    res.status(200).json({
        status: 200,
        data: client[0]
      });
};

const addClient = (req,res)=>{
    let errorMsg = "";
    let message = req.body;
    let requiredFields = ["isActive", "age", "name", "gender", "company", "email", "phone", "address"];

    requiredFields.forEach((field)=>{
        if(!Object.keys(message).includes(field) || message[field].length==0){
            console.log(field+ " is missing.");
            errorMsg = "BAD REQUEST: " + field + " is missing.";
            res.status(400).json({
                satus: 400,
                message: errorMsg
            });
        }
    })

    if(typeof message.age != "number"){
            res.status(400).json({
                satus: 400,
                message: "BAD REQUEST: age must be a number"
            });
    }

    if(!message.email.includes("@") || message.email.includes(" ")){
            res.status(400).json({
                satus: 400,
                message: "BAD REQUEST: invalid email address"
            });
    }

    clients.forEach((client)=>{
        if(client.email == message.email){
            res.status(400).json({
                satus: 400,
                message: "BAD REQUEST: cannot add an existing user."
            });
        }
    })

    let randomID = {id: uuidv4()};
    let newClient = {
        ...randomID,
        ...message
    };

    clients.push(newClient);

    res.status(200).json({
        status: 200,
        message: "client successfully added!"
    });

};

const deleteClient = (req,res)=>{
    let idFound = false;

    clients.forEach((client,index)=>{
        if(client.id == req.body.id){
            clients.splice(index,1)
            idFound = true;
        }
    })

    if(idFound){
        console.log("succes");
        res.status(200).json({
            status: 200,
            message: "Success: User deleted."
        });
    }else{
        console.log("nonononon");
        res.status(400).json({
            status: 400,
            message: "BAD REQUEST: Could not find user."
        });
    }
    
};




module.exports = { getClientList, getClientByID, addClient, deleteClient };