const wordSearch = (letters, word) => {
  if (word === undefined) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  let tempArr = [];
  let verticalArr = [];
  for (let i = 0; i < letters[0].length; i ++) {
    for (let j = 0; j < letters.length; j ++) {
      tempArr.push(letters[j][i]);
    }
    verticalArr.push(tempArr);
    tempArr = [];
  }
  const verticalJoin = verticalArr.map(l => l.join(""));
  for (let v of verticalJoin) {
    if (v.includes(word)) {
      return true;
    }
  }
  let backTempArr = [];
  let backArr = [];
  for (let l of letters) {
    for (let i = l.length - 1; i >= 0; i--) {
      backTempArr.push(l[i]);
    }
    backArr.push(backTempArr);
    backTempArr = [];
  }
  const backWardsJoin = backArr.map(l => l.join(""));
  for (let b of backWardsJoin) {
    if (b.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch