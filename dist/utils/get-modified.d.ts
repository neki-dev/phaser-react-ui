/**
 * Get modified array between current and target value.
 *
 * @param current - Current array
 * @param target - New array
 * @param keys - Keys to compare
 */
export declare function getModifiedArray<T>(current: T[], target: T[], keys?: (keyof T)[]): T[];
/**
 * Return callback for safe update state.
 *
 * @param target - New array
 * @param keys - Keys to compare
 */
export declare function ifModifiedArray<T>(value: T[], keys?: (keyof T)[]): (currentValue: T[]) => T[];
/**
 * Get modified object between current and target value.
 *
 * @param current - Current object
 * @param target - New object
 * @param keys - Keys to compare
 */
export declare function getModifiedObject<T>(current: T, target: T, keys?: (keyof T)[]): T;
/**
 * Return callback for safe update state.
 *
 * @param target - New object
 * @param keys - Keys to compare
 */
export declare function ifModifiedObject<T>(value: T, keys?: (keyof T)[]): (currentValue: T) => T;
