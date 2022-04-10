import { ResolveArgObj } from '../hooks/usePropsForFormik/types';

/**
 * Позволяет получить данные из вложеного объекта
 * @param path
 * @param obj
 * @param separator
 */
export function resolveDataByPath<T>(
  path: string,
  obj: unknown,
  separator = '.'
): T {
  return path
    .split(separator)
    .reduce(
      (prev: unknown, curr: unknown) =>
        prev && (prev as ResolveArgObj)[curr as keyof ResolveArgObj],
      obj
    ) as T;
}
