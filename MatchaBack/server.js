import express		from 'express';
import bodyParser	from 'body-parser';
import cors			from 'cors';
import mongoConnect	from './mongoConnect';
import * as User	from './user/register.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/register', User.register);

app.listen('8080', () => {
	console.log('SERVER STARTED');
});
