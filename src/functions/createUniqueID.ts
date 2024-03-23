export default function createUniqueID(prefix: string = 'id'): string {
    return prefix + '-' + Math.random().toString(36).substr(2, 9);
}