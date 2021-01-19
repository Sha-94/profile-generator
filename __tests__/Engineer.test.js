const Engineer = require('../lib/Engineer');

test('create Engineer object', () => {
  const employee = new Engineer('Jane', 123456, 'jane.doe@email.com', 'github.com/janedoe');

  expect(employee.getName()).toBe('Jane');
  expect(employee.getId()).toEqual(123456);
  expect(employee.getEmail()).toBe('jane.doe@email.com');
  expect(employee.getGithub()).toBe('github.com/janedoe');

});

test('call Engineer\'s getRole() method', () => {
  const employee = new Engineer('Jane', 123456, 'jane.doe@email.com', 'github.com/janedoe');

  expect(employee.getRole()).toBe('Engineer');

});



