import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function bool2str(value: boolean): string {
  return value ? 'true' : 'false';
}

const HomePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (custom-server-typescript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/game">
            <a>Go to game page</a>
          </Link>
        </p>
        <div>
          Environment constants:
          <ul>
            <li>
              <pre>
                <strong>PACKAGE_NAME</strong>: {PACKAGE_NAME}
              </pre>
            </li>
            <li>
              <pre>
                <strong>PACKAGE_VERSION</strong>: {PACKAGE_VERSION}
              </pre>
            </li>
            <li>
              <pre>
                <strong>BUILD_ID</strong>: {BUILD_ID}
              </pre>
            </li>
            <li>
              <pre>
                <strong>COMMIT_HASH</strong>: {COMMIT_HASH}
              </pre>
            </li>
            <li>
              <pre>
                <strong>COMMIT_HASH_SHORT</strong>: {COMMIT_HASH_SHORT}
              </pre>
            </li>
            <li>
              <pre>
                <strong>IS_SERVER</strong>: {bool2str(IS_SERVER)}
              </pre>
            </li>
            <li>
              <pre>
                <strong>IS_PRODUCTION</strong>: {bool2str(IS_PRODUCTION)}
              </pre>
            </li>
          </ul>
        </div>
        <img src="/images/logo.png" />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
