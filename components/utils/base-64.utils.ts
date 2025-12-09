export function isPrintableASCII(str: string): boolean {
  return /^[\x20-\x7E]*$/.test(str);
}

export function toBase64(value: string) {
  try {
    return Buffer.from(value).toString("base64");
  } catch {
    throw new Error("Failed to encode to Base64");
  }
}

export function fromBase64(value: string): string {
  try {
    const decoded = Buffer.from(value, "base64").toString("utf-8");
    return decoded;
  } catch (error) {
    if (error instanceof Error && error.message.includes("non-printable")) {
        throw new Error("Decoded content contains non-printable characters");
    }
    throw new Error("Invalid Base64 input");
  }
}
