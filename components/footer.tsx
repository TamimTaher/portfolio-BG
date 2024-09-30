import React from "react";

export default function FooterComponent() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Abu Taher. All rights reserved.
      </small>
      <p className="text-xs">
        Built with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{" "}
        (App Router & Server Actions),{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        ,{" "}
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Framer Motion
        </a>
        ,{" "}
        <a
          href="https://react-email.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Email
        </a>{" "}
        &amp;{" "}
        <a
          href="https://www.resend.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resend
        </a>
        , and{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>{" "}
        hosting.
      </p>
    </footer>
  );
}
