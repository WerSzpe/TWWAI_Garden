const config = {
    port: process.env.PORT || 3001,
    databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://admin:deEXb9haX5mmzM3p@cluster0.ey7fb.mongodb.net/?retryWrites=true&w=majority',
    JwtSecret: process.env.JWT_SECRET || 'secret'
  };
  
  export default config; 