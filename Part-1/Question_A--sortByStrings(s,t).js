function sortByString(s, t) {
  let h = {};
  for (let k = 0; k < t.length; k++) {
    let char = t[k];
    h[char] = k;
  }
  let arr = s.split('');
  for ( let i = 1; i < arr.length; i++) {
    let j, c1, c2, w1, w2;
      j = i;
      c1 = arr[i];
      c2 = arr[j-1];
      w1 = h[c1];
      w2 = h[c2];
    while (w2 > w1 && j > 0 ) {
      arr[j] = arr[j-1];
      j--;   
      c2 = arr[j-1];
      w2 = h[c2];
    }
    arr[j] = c1;
  }
  return arr.join('');
}
