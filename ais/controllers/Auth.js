'use strict'

class Auth {

	constructor() {
	}

	async index() {
		return user_model.show();
	}

	async create (credentials) {
		const user = {
            last_name: '',
            name: credentials.name,
            second_name: '',
            organization: '',
            status: '',
            isLoggedIn: false,
			email: credentials.email,
			password: credentials.password
		}
		result = await user_model.store(user)
		return result
	}
}

module.exports = UserController