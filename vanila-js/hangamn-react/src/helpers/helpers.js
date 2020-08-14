export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = 'win';

  word.split('').forEach(letter => {
    if (!correct.includes(letter)) {
      status = '';
    }
  });

  if (wrong.length === word.length) {
    status = 'lose';
  }

  return status;
}

export function showHint(selectedWord) {
  let hint = '';
  switch (selectedWord) {
    case 'nigeria':
      hint = 'Hint: Biggest population country in Africa';
  }
  switch (selectedWord) {
    case 'indonesia':
      hint = 'Hint: 4th biggest population country in the world';
  }
  switch (selectedWord) {
    case 'wyoming':
      hint = 'Hint: Smallest population state in US';
  }
  switch (selectedWord) {
    case 'iceland':
      hint = 'Hint: The lowest crime rate in the world';
  }
  return hint;
}
