"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../feature/store";
import "../style/globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const token = true;

  return (
    <html lang="en">
      <body className="bg-primary-light text-primary-dark">
          {!token ? (
            children
          ) : (
            <Provider store={store}>
              <header>Header</header>
              <main>{children}</main>
              <footer>Footer</footer>
            </Provider>
          )}
      </body>
    </html>
  );
}
