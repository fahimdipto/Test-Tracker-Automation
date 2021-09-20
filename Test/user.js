import request from "../config/common";
import  {expect} from 'chai';
const faker = require('faker');

describe ('USERS',()=>{
    let userId;
    describe ('Post',()=>{
        it ('Create User ', async ()=>{
            const data = {
                username: faker.name.firstName()
            }
          const res = await request.post('users/add').send(data).expect(200)
                expect(res.body.message).to.be.eq("User Added");
        });
    })
    describe ('Get',()=>{
    it ('All USER', async ()=>{
        const res =await request.get(`users`).expect(200)
        let arr= res.body;
        userId=arr[arr.length - 1]._id;
                console.log(arr[arr.length - 1]._id);
                console.log(res.body);
               expect(res.body).to.not.be.empty;
    });
    it ('Specific USER', async ()=>{
        const res =await request
            .get(`users/${userId}`)
                console.log(res.status);
                console.log(res.body);
                expect(res.body._id).to.be.eq(userId);
    });
        it ('Negative Testing', async ()=>{
            const res =await request.get(`/neagative`).expect(404)
        });
    });
    describe ('Delete',()=>{
        it ('delete User', async ()=>{
        const res =await request.delete(`users/${userId}`).expect(200)
        expect(res.body.message).to.be.eq("User Deleted as per delete request");
    });
    });
});