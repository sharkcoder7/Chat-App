  const expect = require('expect');
  const {Users} = require('./users');

  describe('Users', () => {
    var users;

    beforeEach(() => {
      users = new Users();
      users.users = [{
        id: '1',
        name: 'Mike',
        room: 'Node Course'
      }, {
        id: '2',
        name: 'Jen',
        room: 'React Course'
      }, {
        id: '3',
        name: 'Julie',
        room: 'Node Course'
      }]
    });

    it('should add new user', () => {
      var users = new Users();
      var user = {
        id: '123',
        name: 'Jason',
        room: 'LOTR Fans'
      };
      var resUser = users.addUser(user.id, user.name, user.room);
      expect(users.users).toEqual([user]);
    });

    it('should return names for node course', () => {
      var userList = users.getUserList('Node Course');
      expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for react course', () => {
      var userList = users.getUserList('React Course');
      expect(userList).toEqual(['Jen']);
    });

    it('should remove a user', () => {
      //take id of seed user pass it here and assert it was removed.
      var userId = '1';
      var removed = users.removeUser(userId);
      expect(removed[0].name).toBe('Mike');
      expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
      //pass in a bogus array and make sure array has not changed.
      var removed = users.removeUser('23');
      expect(removed[0]).toNotExist();
      expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
      var userId = '2';
      var user = users.getUser(userId);
      expect(user[0].id).toBe(userId);
    });

    it('should not find user', () => {
      //pass in bogus id and make sure you don't get a user back.
      var user = users.getUser('234');
      expect(user).toEqual([]);
    });
  });
