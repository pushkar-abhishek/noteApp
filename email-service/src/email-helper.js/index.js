import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: config.EMAIL.HOST,
    port: config.EMAIL.PORT,
    secure: true,
    auth: {
        user: config.EMAIL.USER,
        pass: config.EMAIL.PWD
    }
});

export const send = async (options) => {

    const mailOptions = {
        from: 'pushkar.dream.business@gmail.com',
        to: 'bikerpushkarchamp@gmail.com',
        subject: 'Note App',
        text: 'Created new Note'
    };
    return transport.sendMail(mailOptions);
};
