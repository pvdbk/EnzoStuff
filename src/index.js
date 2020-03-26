

const pause = async nbSec => await new Promise(res => setTimeout(res, nbSec*1000));

let p = new Promise(async res => {
    await pause(2);
    res();
});

p.then(() => console.log("Ok"));




