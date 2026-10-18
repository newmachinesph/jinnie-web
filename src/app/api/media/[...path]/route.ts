type Context = {params: Promise<{path: string[]}>};

async function media(request: Request, {params}: Context) {
  const origin = process.env.JINNIE_ASSET_ORIGIN;
  const {path} = await params;
  if (!origin || !['audio', 'video'].includes(path[0]) || path.length < 2 ||
      path.some(part => !/^[\w.-]+$/.test(part) || part === '.' || part === '..')) {
    return new Response('Not found', {status: 404});
  }
  const headers = new Headers({'Accept-Encoding': 'identity'});
  for (const name of ['Range', 'If-Range', 'If-None-Match', 'If-Modified-Since']) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }
  try {
    const upstream = await fetch(`${origin.replace(/\/$/, '')}/learn-assets/${path.map(encodeURIComponent).join('/')}`, {
      method: request.method, headers, cache: 'no-store', signal: request.signal,
    });
    // Never let an edge cache mistake a ranged response for the whole file.
    const outputHeaders = new Headers({'Cache-Control': 'private, no-store'});
    for (const name of ['Content-Type', 'Content-Length', 'Content-Range', 'Accept-Ranges', 'ETag', 'Last-Modified']) {
      const value = upstream.headers.get(name);
      if (value) outputHeaders.set(name, value);
    }
    return new Response(request.method === 'HEAD' ? null : upstream.body, {
      status: upstream.status, headers: outputHeaders,
    });
  } catch {
    return new Response('Media temporarily unavailable', {status: 502, headers: {'Cache-Control': 'no-store'}});
  }
}

export const GET = media;
export const HEAD = media;
