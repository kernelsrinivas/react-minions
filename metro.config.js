/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
    transformer: {
        //babelTransformerPath: require.resolve('react-native-typescript-transformer'),
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
                resetCache: true
            }
        })
    },
    resolver: {
        sourceExts: ["jsx", "js", "ts", "tsx"]
    }
};
