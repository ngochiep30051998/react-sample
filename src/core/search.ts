export function fuzzySearch(pattern: string, source: string) {
  const hlen = source.length;
  const nlen = pattern.length;
  if (nlen > hlen) {
    return false;
  }
  if (nlen === hlen) {
    return pattern === source;
  }
  outer: for (let i = 0, j = 0; i < nlen; i++) {
    const nch = pattern.charCodeAt(i);
    while (j < hlen) {
      if (source.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}
export function search(value: any, keys: string, term: string) {

  if (!term) {
    return value;
  }
  if (term.startsWith('+')) {
    term = term.replace(/^(\+)/, '\\+');
  }
  return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
}