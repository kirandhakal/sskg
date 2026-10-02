import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getPageSections, sectionDefaults } from '../src/lib/cms';

test('CMS connection and JSON fallback', async (t) => {
  const originalFetch = globalThis.fetch;
  const originalEnv = { ...process.env };
  t.after(() => { globalThis.fetch = originalFetch; process.env = originalEnv; });
  delete process.env.CMS_SITE_KEY;
  globalThis.fetch = async () => { throw new Error('Unexpected request without configuration'); };
  for (const slug of ['home', 'about', 'rooms', 'dining', 'contact', 'privacy', 'terms', 'not-found', 'shared']) {
    assert.ok((await getPageSections(slug)).length > 0, `${slug} has a JSON fallback`);
  }
  process.env.CMS_GRAPHQL_URL = 'https://cms.example.test/graphql';
  process.env.CMS_SITE_KEY = 'test-public-key';
  process.env.CMS_SITE_SLUG = 'my-hotel';
  const section = { type: 'sskg-rooms', schemaVersion: 1, data: { ...sectionDefaults['sskg-rooms'], title: 'CMS rooms' } };
  globalThis.fetch = async (url, options) => {
    assert.equal(url, process.env.CMS_GRAPHQL_URL);
    assert.equal((options?.headers as Record<string, string>)['X-Site-Key'], 'test-public-key');
    assert.equal(JSON.parse(options?.body as string).variables.siteSlug, 'my-hotel');
    return Response.json({ data: { page: { title: 'Rooms', seo: {}, sections: [section] } } });
  };
  const rooms = (await getPageSections('rooms'))[0];
  assert.equal(rooms.type, 'sskg-rooms');
  if (rooms.type === 'sskg-rooms') assert.equal(rooms.data.title, 'CMS rooms');
  globalThis.fetch = async () => Response.json({ data: { page: { sections: [] } } });
  assert.deepEqual(await getPageSections('home'), [], 'intentionally empty published pages stay empty');
  for (const response of [
    { data: { page: null } },
    { errors: [{ message: 'Unauthorized' }] },
    { data: { page: { sections: [{ ...section, data: { title: 'Incomplete' } }] } } },
    { data: { page: { sections: [{ ...section, schemaVersion: 999 }] } } },
  ]) {
    globalThis.fetch = async () => Response.json(response);
    assert.equal((await getPageSections('home'))[0].type, 'sskg-hero');
  }
  globalThis.fetch = async () => { throw new Error('Network unavailable'); };
  assert.equal((await getPageSections('home'))[0].type, 'sskg-hero');
});
