const { join } = require("path");

const MODULES_TO_MOCK = [
    "react-native",
];

MODULES_TO_MOCK.forEach(moduleName => {
    const mockPath = join(__dirname, "../mocks/node_modules", moduleName + ".js");
    jest.mock(moduleName, require(mockPath));
});

