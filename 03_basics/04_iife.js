// Immediately Invoked Function Expressions (IIFE)

(function func() {
    // Named IIFE
    console.log(`DataBase CONNECTED`);
})();

((name) => {
    // Unamed IIFE
    console.log(`DB 2 CONNECTED ${name}`);
})("Shivansu");