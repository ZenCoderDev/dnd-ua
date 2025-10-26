export function getValueByPath<T, K extends string>(
    obj: T,
    path: K
): unknown {
    return path.split('.').reduce<unknown>((acc, key) => {
        if (acc === undefined || acc === null) return undefined;
        if (typeof acc === 'object' && key in acc) {
            return (acc as Record<string, unknown>)[key];
        }
        return undefined;
    }, obj as unknown);
}