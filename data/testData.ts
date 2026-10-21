export const TEST_DATA = {
  credentials: {
    user: process.env.DEMOBLAZE_USER ?? 'testAPA',
    password: process.env.DEMOBLAZE_PASSWORD ?? 'testAPA',
  },
  messages: {
    productAdded: 'Product added',
  },
} as const;