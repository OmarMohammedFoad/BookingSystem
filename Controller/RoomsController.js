import Rooms from "../models/Rooms.js" 
import Hotel from "../models/Hotel.js" 

 
export const   AddNewroom = async(req,res,nxt)=>
{

    const room = new Rooms(req.body);
    const hotelID = req.params.hotelID;
    try 
    {   
        const savedroom = await room.save();
        try 
        {
            await  Hotel.findByIdAndUpdate(hotelID,
                {
                    $push:{rooms:savedroom._id}
                })    
        } catch (error) {
            
        }
        res.status(200).json(savedroom)
    } catch (error) 
    {
        nxt(error);
    }
}


export const GetRoom = async(req,res,nxt)=>
{
    try {
        const room =await Rooms.findById(req.params.id);
        // console.log(hotel);
        res.status(200).json(room);

        
    } catch (error) {
        nxt(error)
    }
}


export const GetAllRooms = async(req,res,nxt)=>
{
    try {
        const room =await Rooms.find();
        console.log(room);
        if(room.length===0)
        {       
            
        res.status(200).json("nothing to show");
        }
       
       else{ 
        res.status(200).json(room);
    }
    } catch (error) {
        nxt(error)
    }
}



export const DeleteOne = async (req,res,nxt)=>
{
    const HotelID = req.params.hotelID
    try {
        
            const room = await Rooms.findByIdAndDelete(req.params.id);
        
            try {

                await Hotel.findByIdAndUpdate(HotelID,{$pull:{rooms:req.params.id}})
            } catch (error) {
                
            }
            res.status(200).json("room has been deleted");

    } 
    catch (error) {
        nxt(error);
    }
}


export const Update = async (req,res)=>
{
    try {
            const room = await Rooms.findByIdAndUpdate(req.params.id, { $set: req.body},{ new: true }
                )
            res.status(200).json(room);

    } 
    catch (error) {
        nxt(error);
    }
}


