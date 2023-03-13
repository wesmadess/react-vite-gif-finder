module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    collectCoverageFrom: ['src/**/*.{(t|j)s,(t|j)sx}'],   
}