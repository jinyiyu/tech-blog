const { DataTypes, Model } = require("sequelize");
const connection = require("../config/connection");
const User = require("./User");
const Blog = require("./Blog");

class Comment extends Model {
  getUser() {
    return {
      id: this.id,
      message: this.message,
      blogId: this.blogId,
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
  message: {
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
  blogId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    reference: {
      model: Blog,
      key: "id",
    },
  },
};

const options = {
  sequelize: connection,
  timeStamp: true,
  underscore: false,
  freezeTableName: true,
  tableName: "comment",
};

Comment.init(schema, options);

module.exports = Comment;
