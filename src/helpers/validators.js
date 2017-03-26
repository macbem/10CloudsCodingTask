export function validateTextField( value, isRequired = true ) {
  return value.length > 0 || !isRequired;
}

export function validatePhoneNumber( value, isRequired = true ) {}
