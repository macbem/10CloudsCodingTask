export function validateTextField( value, isRequired = true ) {
  return value.length > 0 || !isRequired;
}

export function validatePhoneNumber( value, isRequired = true ) {}

export function validateDate( day, month, year ) {
  const newDate = new Date(`${day} ${month}, ${year}`);
  if (newDate.getFullYear() != year
    || newDate.getMonth()   != month
    || newDate.getDate()    != day) {
    return false;
  }
  return true;
}