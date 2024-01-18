import { headers } from "next/headers";
import Script from "next/script";

export default function Page() {
  const nonce = headers().get("x-nonce");

  return (
    <div>
      <h1>Welcome to My Next.js Page</h1>
      <p>This is a simple Next.js page with a Script component.</p>
      {/* <Script src="https://..." strategy="afterInteractive" nonce={nonce} /> */}
    </div>
  );
}
