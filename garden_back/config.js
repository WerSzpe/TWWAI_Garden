const config = {
    port: process.env.PORT || 3001,
    databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://admin:zTn7sov4oH1R3lau@cluster0.ey7fb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    JwtSecret: process.env.JWT_SECRET || 'secret'
  };
  
  export default config; 