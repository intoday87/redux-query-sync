export const createBrowserHistory = () => ({
  listen: jest.fn(),
  location: {
    search: 'any search'
  },
  replace: jest.fn()
})
