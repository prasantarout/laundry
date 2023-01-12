const express = require('express');
const dotenv = require('dotenv');
const db = require('./models');
const cors = require("cors")

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());


const dashRouter = require("./routes/dash");
app.use('/dash', dashRouter);

const detailsRouter = require("./routes/reg")
app.use('/reg', detailsRouter);

db.sequelize.sync().then(() => {
    const PORT =  process.env.PORT || 5000;
    app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
})




// npx sequelize init
// sequelize makes the code look better as it does not use query