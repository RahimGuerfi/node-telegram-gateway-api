interface RequestStatus {
    request_id: string;
    phone_number: string;
    request_cost: number;
    remaining_balance?: number;
    delivery_status?: DeliveryStatus;
    verification_status?: VerificationStatus;
    payload?: string;
}
interface DeliveryStatus {
    status: "sent" | "read" | "revoked";
    updated_at: number;
}
interface VerificationStatus {
    status: "code_valid" | "code_invalid" | "code_max_attempts_exceeded" | "expired";
    updated_at: number;
    code_entered?: string;
}
interface ApiResponseSuccess<T> {
    ok: true;
    result: T;
}
interface ApiResponseError {
    ok: false;
    error: string;
}
type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;
declare class TelegramGateway {
    private apiKey;
    private baseUrl;
    constructor(apiKey: string);
    private getHeaders;
    private apiRequest;
    sendVerificationMessage(phone_number: string, options?: {
        request_id?: string;
        sender_username?: string;
        code?: string;
        code_length?: number;
        callback_url?: string;
        payload?: string;
        ttl?: number;
    }): Promise<ApiResponse<RequestStatus>>;
    checkSendAbility(phone_number: string): Promise<ApiResponse<RequestStatus>>;
    checkVerificationStatus(request_id: string, code?: string): Promise<ApiResponse<RequestStatus>>;
    revokeVerificationMessage(request_id: string): Promise<ApiResponse<boolean>>;
}
export { TelegramGateway, RequestStatus, DeliveryStatus, VerificationStatus };
