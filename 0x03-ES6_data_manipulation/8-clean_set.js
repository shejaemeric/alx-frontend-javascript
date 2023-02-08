function cleanSet(set, str) {
  if (str === '') return '';
  const res = [];
  for (const elt of set) {
    if (elt.startsWith(str)) {
      res.push(elt.split(str)[1]);
    }
  }
  return res.join('-');
}

export default cleanSet;
