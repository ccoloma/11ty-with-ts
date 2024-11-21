import React from "react";
import Header from "../components/Header.11ty";

interface LayoutData extends React.PropsWithChildren {}

export default function DefaultLayout(data: LayoutData) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </head>
      <body className="flex-column justify-between">
        <div>
          <Header />
          <h2>Layout content</h2>
          {data.children}
        </div>
      </body>
    </html>
  );
}
