const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const mailerRoutes = require('./routes/mailer.routes');
const scheduleRoutes = require('./routes/schedule.routes');
const usersRoutes = require('./routes/users.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();
require('./db');

const {
    logErrors,
    errorHandler,
    wrapErrors
} = require('./utils/middlewares/errorHandlers');
const notFoundHandler = require('./utils/middlewares/notFound');

//  Server configs
const { config } = require('./config/index');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares
app.use(cors());
app.use(helmet());
if (config.DEV) {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}

// Routes
app.use('/api/submit', mailerRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);

// Error 404
app.use(notFoundHandler);

// Errors middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.PORT, () => {
    console.log(`Listening on: http://localhost:${config.PORT}`);
})
