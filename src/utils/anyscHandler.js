const anyscHandler = (reqest) =>{
    return(req ,res , next) =>{
        promise.resolve(reqest(req , res , next)).catch((error) => next(error));
    }
}

export{anyscHandler}