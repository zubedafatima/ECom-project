import React from "react";
import CryptoJS from "crypto-js";

const secretKey = "my-secret-key@123";

// export function EnCrypt(dataToEncrypt) {
//   // Encrypt data using AES encryption
//   const encryptedData = CryptoJS.AES.encrypt(
//     JSON.stringify(dataToEncrypt),
//     secretKey
//   ).toString();

//   console.log("Encrypted Data:", encryptedData);

//   return encryptedData;
// }

// export function DeCrypt(dataToDecrypt) {
//   // Decrypt data using AES decryption
//   const bytes = CryptoJS.AES.decrypt(dataToDecrypt, secretKey);
//   const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

//   console.log("Decrypted Data:", decryptedData);
//   return decryptedData;
// }

export const EncryptTransform = {
  in: (data) => {
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      secretKey
    ).toString();
    return encryptedData;
  },
  out: (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  },
};
