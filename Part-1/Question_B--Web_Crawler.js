// Solution:
// Use a trie, a nested hash map where each map has keys of just one character.
// It'd look like a tree
// every node would have boolean value indicating if word completes there
// Javascript has objects which act like hash map and can nest other objects, so nested hash maps

var hash = {};


function storeIntoNestedHash(word, node) {
  if (word.length == 0) return;
  let char = word[0];
  node = node || hash;
  node[char] = node[char] || {};
  if (word.length == 1) {
    node[char]['isWord'] = true;
  } else {
    storeIntoNestedHash(word.substr(1), node[char]);
  }
}
