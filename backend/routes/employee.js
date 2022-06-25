const{request ,response, query} = require('express');
const express =require('express')
const db =require('../db')
const utils =require('../utils')

const router = express.Router();

//  GET  --> Display Employee using name from MySQL

router.get('/',(request,response)=>{
    const query = `select * from employee`;

    db.execute(query,(error,result)=>{
        response.send(utils.createResult(error,result));
    })
})

//POST --> ADD Employee data into  MySQL table

router.post('/',(request,response)=>{
    const{emp_name, emp_address, emp_email, emp_mobileno, emp_dob, emp_joiningdate} = request.body;

    const query = `insert into employee(emp_name, emp_address, emp_email, emp_mobileno, emp_dob, emp_joiningdate)
    values ('${emp_name}', '${emp_address}', '${emp_email}', '${emp_mobileno}', '${emp_dob}','${emp_joiningdate}')`
})


router.patch('/update/:id',(request,response)=>{
    const{id}= request.params;
    const{emp_address, emp_email, emp_mobileno } = request.body;
    
    const query = `update employee set emp_address='$(emp_address)',
        emp_email='$(emp_email)', emp_mobileno ='$(emp_mobileno)' where emp_id =$(id)`;

        db.execute(query,(error,result)=>{
            response.send(utils.createResult(error,result));
        })  
})


//DELETE --> Delete Employee from  MySQL

router.delete('/',(request,response)=>{
    const{id} = request.params;

    const query = `delete from movie where movie_id=$(id)`;
    
    db.execute(query,(error,result)=>{
        response.send(utils.createResult(error,result));
    })
})

module.exports=router;
