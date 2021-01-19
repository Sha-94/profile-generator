const Employee = require('../lib/Employee');


test('create Employee object', () => {
  const employee = new Employee('Jane', 123456, 'jane.doe@gmail.com');

  expect(employee.getName()).toBe('Jane');
  expect(employee.getId()).toEqual(123456);
  expect(employee.getEmail()).toBe('jane.doe@gmail.com');
});

test('call Employee\'s getRole method ', () => {
  const employee = new Employee('Jane', 123456, 'jane.doe@gmail.com');

  expect(employee.getRole()).toBe('Employee');
})