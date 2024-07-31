// import jwt from 'jsonwebtoken';

// const auth = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const isCustomAuth = token.length < 500;

//     let decodedData;

//     if (token && isCustomAuth) {      
//       decodedData = jwt.verify(token, 'your_jwt_secret');
//       req.userId = decodedData?.id;
//     } else {
//       decodedData = jwt.decode(token);
//       req.userId = decodedData?.sub;
//     }    

//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default auth;





import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  userId?: string;
}

const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: 'No auth token' });
    }

    const isCustomAuth = token.length < 500;

    let decodedData;

    if (isCustomAuth) {      
      decodedData = jwt.verify(token, 'your_jwt_secret') as { id: string };
      req.userId = decodedData.id;
    } else {
      decodedData = jwt.decode(token) as { sub: string };
      req.userId = decodedData.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default auth;