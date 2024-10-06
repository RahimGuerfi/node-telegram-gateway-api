# 📲 Telegram Gateway API Client

A Node.js client for interacting with the [Telegram Gateway API](https://core.telegram.org/gateway/api) to manage phone verification messages easily. This library simplifies sending verification messages, checking their status, and revoking them.

## 📦 Installation

Install the package using npm:

```bash
npm install telegram-gateway-api-client
```

## 🚀 Getting Started

First, you need to obtain your API key from the Telegram Gateway API account settings. This key will be used to authorize all requests.

```ts
import { TelegramGateway } from "telegram-gateway-api-client";

const apiKey = "YOUR_TELEGRAM_API_KEY";
const client = new TelegramGateway(apiKey);
```

## 📚 Usage Guide

### 1. Send a Verification Message

Use `sendVerificationMessage` to send a verification code to a specified phone number:

```ts
async function sendVerification() {
  try {
    const response = await client.sendVerificationMessage("+1234567890", {
      sender_username: "YourApp",
      code_length: 6,
    });
    if (response.ok) {
      console.log("Message sent successfully:", response.result);
    } else {
      console.error("Error sending message:", response.error);
    }
  } catch (error) {
    console.error("API request failed:", error);
  }
}
```

### 2. Check Send Ability

Before sending a message, you can verify if it is possible to send a message to the given phone number:

```ts
async function checkSendAbility() {
  try {
    const response = await client.checkSendAbility("+1234567890");
    if (response.ok) {
      console.log("Able to send verification message:", response.result);
    } else {
      console.error("Cannot send message:", response.error);
    }
  } catch (error) {
    console.error("API request failed:", error);
  }
}
```

### 3. Check Verification Status

After sending a verification message, you can check its status:

```ts
async function checkVerificationStatus() {
  try {
    const response = await client.checkVerificationStatus(
      "request_id_here",
      "user_entered_code"
    );
    if (response.ok) {
      console.log("Verification status:", response.result);
    } else {
      console.error("Error checking status:", response.error);
    }
  } catch (error) {
    console.error("API request failed:", error);
  }
}
```

### 4. Revoke a Verification Message

If needed, you can revoke a verification message that was previously sent:

```ts
async function revokeMessage() {
  try {
    const response = await client.revokeVerificationMessage("request_id_here");
    if (response.ok) {
      console.log("Message revoked successfully");
    } else {
      console.error("Error revoking message:", response.error);
    }
  } catch (error) {
    console.error("API request failed:", error);
  }
}
```

## 📖 Documentation

For more detailed information about the Telegram Gateway API, visit the [official documentation](https://core.telegram.org/gateway/api).

## 🛠️ Contributing

Feel free to submit issues or contribute to the project through pull requests. Contributions are welcome! 🙌

## 📝 License

This project is licensed under the MIT License.
