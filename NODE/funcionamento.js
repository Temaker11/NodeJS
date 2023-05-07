function c() {
  setTimeout(() => {
    console.log("c");
  }, 0);

  return;
}
function b() {
  console.log("b");
  c();
  return c;
}
function a() {
  b();
  console.log("a");
  return;
}

a();
