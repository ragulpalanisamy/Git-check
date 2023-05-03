module.exports = (Sequelize, DataTypes) => {
    const Movies = Sequelize.define(
        "Movies",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title:{
              type:DataTypes.STRING
            },
            year_of_release: {
              type:DataTypes.INTEGER
            },
            rating: {
              type: DataTypes.FLOAT
            },
            movie_id: {
              type: DataTypes.STRING.BINARY 
            },
  
        },
        {
            timestamps: false,
            modelName: "Movies",
            tableName: "movies",
        },
    );

    return Movies;
};
