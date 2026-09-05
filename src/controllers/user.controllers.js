import {anyscHandler} from "../utils/anyscHandler.js";

const registerUser = anyscHandler( async(req , res) =>{
    res.status(200).json({
        massage : "ok"
    })
});

export {registerUser};