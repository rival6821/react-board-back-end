const express = require('express');
const router = express.Router();
const { User } = require('../models');

// 회원가입시 중복체크
router.post('/dupTest', async (req, res, next) => {
	const { type, data } = req.body;
	try {
		let exUser;
		if (type === 'nickname') {
			exUser = await User.findOne({ where: { nickname: data } });
		} else if (type === 'email') {
			exUser = await User.findOne({ where: { email: data } });
		}
		if (!exUser) {
			res.send('ok');
		} else {
			res.send('exist');
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
