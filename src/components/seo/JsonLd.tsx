import React from 'react';

interface JsonLdProps {
  data: Record<string, any> | null;
}

/**
 * Server-rendered JSON-LD script component
 * Injects safe JSON-LD structured data into the HTML head / body.
 */
export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  if (!data) return null;

  // Safe serialization preventing script injection or unescaped HTML tags
  const jsonString = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
};
