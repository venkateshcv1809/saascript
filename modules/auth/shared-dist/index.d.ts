export interface ExampleType {
    id: string;
    name: string;
    description?: string;
}
export type ResponseData<T> = {
    data: T;
    error?: string;
};
export interface ApiResponse<T> {
    status: number;
    message: string;
    result: ResponseData<T>;
}
export * from "./common";
export * from "./CustomError";
