const app = require("./app");

async function main() {
    app.listen(`5000`, () => {
        console.log(`App is running on PORT 5000`)
    })
}

main()