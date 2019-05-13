const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

// 회원가입시 중복체크, 이메일, 닉네임
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
		console.error(error);
		next(error);
	}
});

// 회원가입 처리
router.post('/join', async (req, res, next) => {
	const { email, nickname, password } = req.body;
	try {
		const hash = await bcrypt.hash(password, 12);
		await User.create({
			email: email,
			nickname: nickname,
			password: hash,
		});
		res.send('ok');
	} catch (error) {
		console.error(error);
		next(error);
	}
});

module.exports = router;
