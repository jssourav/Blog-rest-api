// Promise is a object

// promise create
// const promise = new Promise((resolve, reject) => {
//   const name = "ssdsd";
//   if (name === "subhasree") {
//     resolve("Congratulation Subhasree!");
//   } else {
//     reject("Sorry Souraav!");
//   }
// });

// consume promise
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.log(err));

/**
 * Async Await
 */

const helperPromise = function () {
  const promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "asddsa";
    if (x === y) {
      resolve("Strings are same");
    } else {
      reject("Strings are not same");
    }
  });

  return promise;
};

async function demo() {
  try {
    const msg = await helperPromise();
    console.log(msg, "asdasdasda");
  } catch (error) {
    console.log(error);
  }
}

demo();
