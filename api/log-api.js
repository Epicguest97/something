// api/log-ip.js
export default function handler(req, res) {
    // Random log to confirm the function is working
    console.log("Serverless function is working!");
  
    // Get the IP address from the request headers
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
    // Log the IP address
    console.log(`Visitor IP: ${ip}`);
  
    // Respond to the client
    res.status(200).json({ ip });
  }