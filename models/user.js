module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'user',
		{
			email: {
				type: DataTypes.STRING(50),
				allowNull: false,
				unique: true,
			},
			nickname: {
				type: DataTypes.STRING(15),
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING(200),
				allowNull: false,
			},
		},
		{
			timestamps: true,
			paranoid: true,
		},
	);
};
