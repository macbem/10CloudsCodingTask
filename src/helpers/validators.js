export function validateName(value) {
  if (!value.length) {
    return 'This field cannot be blank';
  }

  if (!value.match(/([A-Za-z]+)\s([A-Za-z]+)/)) {
    return 'This field should contain at least two words.';
  }

  return null;
}

export function validatePhoneNumber(value) {
  const numberWithoutSpaces = value.replace(' ', '');
  if (!/^[0-9+]{1,}[0-9-]{6,15}$/.test(numberWithoutSpaces)) {
    return 'Phone number is invalid';
  }

  return null;
}

export function validateGender() {
  // any value is okay, blank value won't trigger the error overwrite
  return null;
}

export function validateDate({ day, month, year }) {
  const monthNames = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
  ];

  let numericMonth;

  if (monthNames.indexOf(month.toLowerCase()) >= 0) {
    numericMonth = monthNames.indexOf(month.toLowerCase());
  } else {
    const noLeadingZeroMonth = month[0] === '0'
      ? Number(month.substring(1))
      : Number(month);
    if (noLeadingZeroMonth > 0 && noLeadingZeroMonth <= 12) {
      numericMonth = noLeadingZeroMonth - 1;
    } else {
      return 'Specified date is invalid';
    }
  }

  const newDate = new Date(Number(year), numericMonth, Number(day));

  if (
    newDate.getFullYear() !== Number(year) ||
    newDate.getMonth() !== numericMonth ||
    newDate.getDate() !== Number(day)
  ) {
    return 'Specified date is invalid';
  }

  return null;
}
