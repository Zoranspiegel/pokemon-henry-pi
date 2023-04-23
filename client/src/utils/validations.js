export default function validate (input) {
  const err = {};
  if (!input.name) err.name = 'Required Field!';
  else if (input.name.length === 1) err.name = 'Invalid Name';
  if (!input.health) err.health = 'Required Field!';
  else if (input.health < 1 || input.health > 999) err.health = 'Must be a value between 1 and 999';
  if (!input.attack) err.attack = 'Required Field!';
  else if (input.attack < 1 || input.attack > 999) err.attack = 'Must be a value between 1 and 999';
  if (!input.defense) err.defense = 'Required Field!';
  else if (input.defense < 1 || input.defense > 999) err.defense = 'Must be a value between 1 and 999';
  if (!input.speed) err.speed = 'Required Field!';
  else if (input.speed < 1 || input.speed > 999) err.speed = 'Must be a value between 1 and 999';
  if (!input.height) err.height = 'Required Field!';
  else if (input.height < 1 || input.height > 9999) err.height = 'Must be a value between 1 and 9999';
  if (!input.weight) err.weight = 'Required Field!';
  else if (input.weight < 1 || input.weight > 9999) err.weight = 'Must be a value between 1 and 9999';
  return err;
}
