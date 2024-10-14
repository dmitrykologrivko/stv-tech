export function all(conditions) {
  for (const condition of conditions) {
    if (!condition) {
      return false;
    }
  }
  return true;
}
