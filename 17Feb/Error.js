function doSomething() {
  throw new Error("a error is thrown from dosomething");
}

function init() {
  try {
    doSomething();
  } catch (err) {
    console.log(err);
  }
  console.log("after successful error handling ");
}

init();
