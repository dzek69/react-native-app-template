module.exports = {
    transformer: {
        getTransformOptions: () => Promise.resolve({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    resolver: {
        sourceExts: ["js", "json", "ts", "tsx", "jsx"],
    },
};
