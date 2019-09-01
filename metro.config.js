module.exports = {
    transformer: {
        getTransformOptions: () => Promise.resolve({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
};
