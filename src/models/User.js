const hashPassword = require("../hooks/index");
const bcrypt = require("bcrypt");
const { DataTypes, Model } = require("sequelize");
const connection = require("../config/connection");

class User extends Model {
  getUser() {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
    };
  }

  async checkPassword(password) {
    const isValid = await bcrypt.compare(password, this.password);
    return isValid;
  }
}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  sequelize: connection,
  timeStamp: true,
  underscore: false,
  freezeTableName: true,
  tableName: "user",
  hooks: {
    beforeCreate: hashPassword,
  },
};

User.init(schema, options);

module.exports = User;
