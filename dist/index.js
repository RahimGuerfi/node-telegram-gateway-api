"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramGateway = void 0;
const axios_1 = __importDefault(require("axios"));
class TelegramGateway {
    constructor(apiKey) {
        this.baseUrl = "https://gatewayapi.telegram.org/";
        this.apiKey = apiKey;
    }
    // Helper method to create headers with Authorization token
    getHeaders() {
        return {
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
        };
    }
    apiRequest(method, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.post(`${this.baseUrl}/${method}`, params, {
                    headers: this.getHeaders(),
                });
                return response.data;
            }
            catch (error) {
                console.error("API request failed:", error);
                throw error; // Re-throw the error for further handling if needed
            }
        });
    }
    // sendVerificationMessage
    sendVerificationMessage(phone_number, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.apiRequest("sendVerificationMessage", Object.assign({ phone_number }, options));
        });
    }
    // checkSendAbility
    checkSendAbility(phone_number) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.apiRequest("checkSendAbility", {
                phone_number,
            });
        });
    }
    // checkVerificationStatus
    checkVerificationStatus(request_id, code) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.apiRequest("checkVerificationStatus", {
                request_id,
                code: code,
            });
        });
    }
    // revokeVerificationMessage
    revokeVerificationMessage(request_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.apiRequest("revokeVerificationMessage", {
                request_id,
            });
        });
    }
}
exports.TelegramGateway = TelegramGateway;
