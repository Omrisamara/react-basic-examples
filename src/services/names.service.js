export const getNames = () => new Promise((resolve, rej) => {
    const names = ["omri", "omer", "dan", "matan"];

    setTimeout(() => {
        resolve(names);
    }, 2000)
})