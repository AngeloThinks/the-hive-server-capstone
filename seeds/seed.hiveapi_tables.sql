BEGIN;

INSERT INTO hiveapi_users (user_name,first_name,last_name ,password,email,phone_number )
VALUES
  ('demoacc',
  'demo1',
  'demo2',
  --password: pass1
  '$2a$12$zjujb7acz65IE0DOM1JJ6.iedBs1Opou6.9ADYHW.DwbfxQsw.niG',
  'demoemail@.com',
  '123-123-1234');
INSERT INTO engineers(first_name)
VALUES
  ('Angelo'),
  ('Ross'),
  ('Christian'),
  ('Pat');
INSERT INTO services (type , price)
VALUES
  ('Single song mastered','$20'),
  ('Two songs mastered','$25'),
  ('Three songs mastered','$30'),
  ('Four songs mastered','$35');
COMMIT;

