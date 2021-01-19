const Manager = require('../lib/Manager');

test('create Manager object', () => {
  const employee = new Manager('Jane', 123456, 'jane.doe@email.com', 1011);

  expect(employee.getName()).toBe('Jane');
  expect(employee.getId()).toEqual(123456);
  expect(employee.getEmail()).toBe('jane.doe@email.com');
  expect(employee.getOfficeNumber()).toEqual(1011);

});

test('call Manager\'s getRole() method', () => {
  const employee = new Manager('Jane', 123456, 'jane.doe@email.com', 1011);

  expect(employee.getRole()).toBe('Manager');

});



