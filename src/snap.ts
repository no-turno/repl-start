export default `{
        {
            let _bundler = {
        bun: {
            config: {
                transpiler: {
                    jsx: "react",
                    jsxFactory: "React.createElement",
                    jsxFragment: "React.Fragment",
                },
            },
        }
    };

    console.log(_bundler);

    let _bun = {
        transpiler: {
            jsx: "react",
            jsxFactory: "React.createElement",
            jsxFragment: "React.Fragment",
        },
    };

    console.log(_bun)
}
}`
