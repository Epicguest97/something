// api/log-ip.js
export default function handler(req, res) {
    // Get the IP address from the request headers
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
    // Log the IP address (you can replace this with a database or external logging service)
    console.log(`Visitor IP: ${ip}`);
  
    // Respond to the client
    res.status(200).json({ ip });
  }