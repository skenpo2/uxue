import Link from 'next/link';

export default function NotFound() {
  return (
    <header className="page-hero page-hero--text-only not-found">
      <div className="shell page-hero__layout">
        <div className="page-hero__content">
          <h1>This page could not be found.</h1>
          <p className="page-hero__lede">The link may be out of date, or the page may have moved. Everything we do is one click away from here.</p>
          <div className="home-hero__actions">
            <Link href="/" className="button button--orange">Back to home</Link>
            <Link href="/solutions" className="button button--outline">Explore solutions</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
