function removeKFromList(l, k) {
  if (!l) return null;
  if (l.value == k) {
    l = l.next; 
    l = removeKFromList(l, k);
    return l;
  } else {
    l.next = removeKFromList(l.next, k);
    return l;
  }
}

module.exports = {
  removeKFromList
};
