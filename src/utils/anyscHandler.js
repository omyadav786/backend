const asyncHandler = (reqest) =>{
    (req ,res , next) =>{
        promise.resolve(reqest(req , res , next)).catch((error) => next(error));
    }
}
export{asyncHandler}