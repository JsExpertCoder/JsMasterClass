export const PI = 3.141592
export default function pow(base, exponential) {
    if (exponential === 0) return 1
    return base * pow(base, exponential - 1)
}