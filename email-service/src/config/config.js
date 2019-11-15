import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        PORT: process.env.PORT,
        ENV: process.env.ENV,
        HOST: process.env.HOST,
        DATABASE: {
            DB_HOST: process.env.DB_HOST,
            DB_PORT: process.env.DB_PORT,
            DB_NAME: process.env.DB_NAME,
            DB_USER: process.env.DB_USER,
            DB_PWD: process.env.DB_PWD,
        },
        EMAIL: {
            HOST: process.env.EMAIL_HOST,
            PORT: process.env.EMAIL_PORT,
            USER: process.env.EMAIL_USER,
            PWD: process.env.EMAIL_PASSWORD
        }
    }
};

export default config[env];
