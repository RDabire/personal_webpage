import { defineMiddleware } from 'astro:middleware';
import { siteFeatures } from './config/site';

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;
  if (
    !siteFeatures.blog &&
    (pathname === '/blog' || pathname.startsWith('/blog/'))
  ) {
    const response = context.redirect('/', 302);
    response.headers.set('Cache-Control', 'no-store');
    return response;
  }
  const response = await next();
  const contentType = response.headers.get('content-type') || '';

  // Prevent stale HTML from being cached with outdated hashed asset URLs.
  if (contentType.includes('text/html')) {
    response.headers.set(
      'Cache-Control',
      'no-cache, no-store, must-revalidate, max-age=0'
    );
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  }

  return response;
});
