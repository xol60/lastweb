import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
	const authHeader = req.header('Authorization')
	const token = authHeader && authHeader.split(' ')[1]

	if (!token)
		return res
			.status(401)
			.json({ success: false, name: 'Access token not found' })

	try {
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

		req.Customer=decodeed.Customer;
		next()
	} catch (error) {
		console.log(error)
		return res.status(403).json({ success: false, message: 'Invalid token' })
	}
}
export const verifyTokenOwner = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.role=="owner"){
            next();
        }
        else{
            res.status(403).json("You're not allowed to do that!");
    }})
}
export const verifyTokenCoowner = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.role=="co-owner" || req.role=="owner"){
            next();
        }
        else{
            res.status(403).json("You're not allowed to do that!");
    }})
}
