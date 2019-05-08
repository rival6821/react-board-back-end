module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'board',
		{
			title: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			contents: {
				type: DataTypes.TEXT('medium'),
				allowNull: false,
			},
		},
		{
			timestamps: true,
			paranoid: true,
		},
	);
};
