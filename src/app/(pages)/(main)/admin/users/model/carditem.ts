export interface CardItemModel {
    id: string,
    name: string;
    email: string;
    role: string | string[],
    status: boolean;
    timestamp: string;
    lock: boolean;
}
