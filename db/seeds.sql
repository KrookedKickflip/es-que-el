INSERT INTO department (id, name) VALUES
  (1, 'Rebel Alliance'),
  (2, 'Galactic Empire'),
  (3, 'Jedi Order');

INSERT INTO role (id, title, salary, department_id) VALUES
  (1, 'General', 200000.00, 1),
  (2, 'Stormtrooper', 10000.00, 2),
  (3, 'Sith Lord', 600000.00, 2),
  (4, 'Jedi Knight', 55000.00, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
  (1, 'Leia', 'Organa', 1, NULL),
  (2, 'Luke', 'Skywalker', 4, NULL),
  (3, 'Han', 'Solo', 2, NULL),
  (4, 'Darth', 'Vader', 3, NULL),
  (5, 'Obi-Wan', 'Kenobi', 4, NULL),
  (6, 'Anakin', 'Skywalker', 4, 4);