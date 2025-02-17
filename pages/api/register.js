




export default function handler(req, res) {
  
      const { username, email, password } = req.body;
      
      // Process registration logic here (e.g., save to DB)
      
      res.status(200).json({ message: 'User registered successfully' });
   
  }
  