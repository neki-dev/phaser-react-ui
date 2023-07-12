/**
 * Get modified array between current and target value.
 *
 * @param current - Current array
 * @param target - New array
 * @param keys - Keys to compare
 */
export function getModifiedArray<T>(
  current: T[],
  target: T[],
  keys: (keyof T)[],
) {
  if (!target) {
    return current;
  }
  if (!current) {
    return target;
  }

  if (current.length !== target.length) {
    return target;
  }

  for (let i = 0; i < current.length; i++) {
    for (const key of keys) {
      if (current[i][key] !== target[i][key]) {
        return target;
      }
    }
  }

  return current;
}

/**
 * Get modified object between current and target value.
 *
 * @param current - Current object
 * @param target - New object
 */
export function getModifiedObject<T>(current: T, target: T) {
  if (!target) {
    return current;
  }
  if (!current) {
    return target;
  }

  const keys = <(keyof T)[]>Object.keys(current);

  for (const key of keys) {
    if (current[key] !== target[key]) {
      return target;
    }
  }

  return current;
}
