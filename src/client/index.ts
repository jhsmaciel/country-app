export interface Fetch<T> {
    payload: T,
    loading: boolean,
    error?: Error
}