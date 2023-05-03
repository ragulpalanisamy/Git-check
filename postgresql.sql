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


const Sequelize = require("sequelize");

const PG_URL = "postgres://wgxwxyht:tt53d-f7zu_idq6Y10J6uug3z2rh7w8P@lallah.db.elephantsql.com/wgxwxyht";

const sequelize = new Sequelize(PG_URL, {
  dialect: "postgres"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Movies = require("./Movies.js")(sequelize, Sequelize);

module.exports = db;