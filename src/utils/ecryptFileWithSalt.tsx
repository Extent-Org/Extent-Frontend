//@ts-ignore
import crypto from "crypto-browserify"
const { Buffer } = require('buffer')

const ecryptFileWithSalt = (
    file: any,
    decrypt = false,
  ) => {
    const algo = "aes-256-ctr";
    const key = crypto.randomBytes(16).toString("hex");
    const salt = crypto.randomBytes(8).toString("hex");
    if (!decrypt) {
      const cipher = crypto.createCipheriv(algo, key, salt);
      const crypted = Buffer.concat([cipher.update(file.data), cipher.final()]);
      return crypted;
    } else {
      const cipher = crypto.createDecipheriv(algo, key, salt);
      const decrypted = Buffer.concat([cipher.update(file.data), cipher.final()]);
      return decrypted;
    }
  };

export default ecryptFileWithSalt;