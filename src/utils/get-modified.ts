/**
 * Get modified array between current and target value.
 *
 * @param current - Current array
 * @param target - New array
 * @param keys - Keys to compare
 */
export function getModifiedArray<T extends {}>(
  current: T[],
  target: T[],
  keys?: (keyof T)[],
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

  const keysToCompare = keys ?? <(keyof T)[]>Object.keys(current[0]);

  for (let i = 0; i < current.length; i++) {
    for (const key of keysToCompare) {
      if (current[i][key] !== target[i][key]) {
        return target;
      }
    }
  }

  return current;
}

/**
 * Return callback for safe update state.
 *
 * @param target - New array
 * @param keys - Keys to compare
 */
export function ifModifiedArray<T extends {}>(value: T[], keys?: (keyof T)[]) {
  return (currentValue: T[]) => getModifiedArray(currentValue, value, keys);
}

/**
 * Get modified object between current and target value.
 *
 * @param current - Current object
 * @param target - New object
 * @param keys - Keys to compare
 */
export function getModifiedObject<T extends {}>(
  current: T,
  target: T,
  keys?: (keyof T)[],
) {
  if (!target) {
    return current;
  }

  if (!current) {
    return target;
  }

  const keysToCompare = keys ?? <(keyof T)[]>Object.keys(current);

  for (const key of keysToCompare) {
    if (current[key] !== target[key]) {
      return target;
    }
  }

  return current;
}

/**
 * Return callback for safe update state.
 *
 * @param target - New object
 * @param keys - Keys to compare
 */
export function ifModifiedObject<T extends {}>(value: T, keys?: (keyof T)[]) {
  return (currentValue: T) => getModifiedObject(currentValue, value, keys);
}
