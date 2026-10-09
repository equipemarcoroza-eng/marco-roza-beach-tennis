# Architecture rules
- Keep page-specific SEO metadata and canonical links on leaf routes so shared metadata does not duplicate page identity.
- Derive sitemap URLs from explicit route staticData.sitemap decisions through the shared sitemap helper so new public pages remain discoverable without a manual URL list.