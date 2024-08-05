import connectDB from './db/db.js';
import app from './app.js';


connectDB();

app.listen(3000, () => {   

    console.log('Server is running on http://localhost:3000');

});
