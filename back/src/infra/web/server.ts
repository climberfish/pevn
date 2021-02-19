import app from 'application/app';

const PORT = process.env.PORT || 4000;

export const startServer = () => app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
