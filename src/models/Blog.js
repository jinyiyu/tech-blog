const { DataTypes, Model } = require("sequelize");
const connection = require("../config/connection");
const User = require("./User");

class Blog extends Model {
  getUser() {
    return {
      id: this.id,
      title: this.title,
      body: this.body,
      userId: this.userId,
    };
  }
}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    reference: {
      model: User,
      key: "id",
    },
  },
};

const options = {
  sequelize: connection,
  timeStamp: true,
  underscore: false,
  freezeTableName: true,
  tableName: "blog",
};

Blog.init(schema, options);

module.exports = Blog;
