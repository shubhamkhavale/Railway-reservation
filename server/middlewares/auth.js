import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import cookie_parser from 'cookie-parser'
import config from '../config.js'


const auth = async (req, res ,  next) => {
	config.mongo_connect() // connecting to the database 
	//console.log('Token',req.cookies.accessToken)
	try{
		let token = req.cookies.accessToken
		//console.log(token)
		if(!token) return res.status(401).send({
			success:false,
			msg:"Authentication required.",
			toPath:'/login'
		})
		// //console.log('token from cookies or from user',token)
		const verify_token = jwt.verify(token ,"Thisismysecretkeyforjsonwebtoken") 
		// //console.log(verify_token)
		const user = await User.findOne({_id:verify_token.id})
		// //console.log(user)
		if(!user) throw new Error("This user is not permitted or not found!");
		req.token = token 
		req.user = user 
		req.user_id = user._id 
		next()
	}
	catch(error) {
		return res.status(403).send({
			success:false,
			msg:'Unauthorized',
			toPath:'/login'
		})
		//console.log('There was an error during authorization....')
	}
}

export default auth