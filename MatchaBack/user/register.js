import mongoConnect from '../mongoConnect.js';

const register = (req, res) => {
	mongoConnect(res, (db) => {
		const users = db.collection('users')

		users.findOne({
			username: req.body.username,
		}).then((result, err) => {
			if (result) res.send({ status: false, details: 'user already exists' })
			else {
				return users.insert({
					...req.body
				})
			}
		}).then((result, err) => {
			if (err) res.send({ status: false, details: 'An error occurred' })
			else res.send({ status: true, details: 'user successfully added' })
		})
	})
}
export {register}
