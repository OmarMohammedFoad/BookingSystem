import { Request } from 'express';
import {getHotel,getHotelById,deleteOne} from '../Controller/HotelController';


// describe('booking',()=>{
//     it('should return data',async()=>{
//     const req:any= {};
//     const res:any = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn(),
//     };
//     const nxt = jest.fn();

//     await getHotel(req,res,nxt).then(() => {
//         console.log(res.json.mock.calls);
//                         expect(res.status).toHaveBeenCalledWith(200);
//                         expect(res.json).toHaveBeenCalledWith(res.json.mock.calls[0][0]);
//                     });
//                 });
//             });


// describe('Booking', () => {
//     it('it should return me specific data', async () => {
//         const req:any= {params: {id: 1}};
//         const res:any = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn(),
//         };
//         const nxt = jest.fn();
//         await getHotelById(req,res,nxt).then(() => {
//             expect(res.status).toHaveBeenCalledWith(200);
//             expect(res.json).toHaveBeenCalledWith(res.json.mock.calls[0][0]);
//         });

      
//     });
// });

describe('Booking', () => {
    it('it should delete  specific data', async () => {
        const req:any= {params: {id: 2}};
        const res:any = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        const nxt = jest.fn();
        await deleteOne(req,res,nxt).then(() => {
            console.log(res.status.mock.calls);
            console.log(res.json.mock.calls);
            
            
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({message: 'deleted'});
        });
    });
});
        


// describe('Booking', () => {
//     describe('get the data from the database ', () => {
//         it('should return the data from the database', async () => {
//             const req:any= { };
//             const res:any = {
//                 status: jest.fn().mockReturnThis(),
//                 json: jest.fn(),
//             };
//             const nxt = jest.fn();
//             await getHotel(req,res,nxt).then(() => {
//                 expect(res.status).toHaveBeenCalledWith(200);
             
//                 // expect(res.json).toHaveBeenCalledWith({message: 'Data fetched successfully', data: []});
//             });
//         });
//     })
    
// });


