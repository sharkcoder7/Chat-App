  class Users {
    constructor () {
      this.users = [];
    }

    addUser (id, name, room) {
      var user = {id, name, room};
      this.users.push(user);
      return user;
    }
    removeUser (id) {
      var removedUser = this.users.filter((user) => user.id === id);
      if(removedUser) {
        this.users = this.users.filter((user) => user.id !== id)
      }
      return removedUser;
    }
    getUser (id) {
      var users = this.users.filter((user) => user.id === id);
      return users;

    }
    getUserList (room) {
      var users = this.users.filter((user) => user.room === room);
      var namesArray = users.map((user) => user.name);

      return namesArray;
    }
  }

  module.exports = {Users}
