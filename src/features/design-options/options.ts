export const options = [
  {
    slug: 'letter',
    name: 'The letter',
    description:
      'A quiet, serif page with a personal introduction and a little breathing room.',
    color: '#eee7dc',
    type: 'Serif / warm paper / one column',
  },
  {
    slug: 'swiss',
    name: 'The bold type',
    description: 'Big typography, red ink, and a direct account of your work.',
    color: '#f04b32',
    type: 'Sans serif / vermilion / editorial grid',
  },
  {
    slug: 'field-notes',
    name: 'The field notes',
    description:
      'A green notebook with a portrait, marginal notes, and room to write.',
    color: '#dce5cd',
    type: 'Serif + mono / olive / notebook',
  },
  {
    slug: 'index',
    name: 'The plain index',
    description: 'A compact, text-led homepage inspired by the early web.',
    color: '#dce8f4',
    type: 'Monospace / blue ink / simple lists',
  },
  {
    slug: 'portrait',
    name: 'The personal introduction',
    description: 'A generous portrait and a warm, conversational introduction.',
    color: '#edbea6',
    type: 'Serif + sans / terracotta / split layout',
  },
] as const;
