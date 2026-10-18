export function learnBasePath() {
  if (typeof location !== 'undefined' && ['learn.jinnie.ph', 'learn.localhost'].includes(location.hostname)) return '';
  return '/learn';
}
export const assetPath = path => '/learn-assets/' + path.replace(/^\.?\/?assets\//, '').replace(/^\//, '');
export const mediaCache = () => `jinnie-next-media-${learnBasePath() || '/'}-taglish-numbers-v2`;
