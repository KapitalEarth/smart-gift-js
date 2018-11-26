export function isSmartGiftIdCreatedAsync(id) {
  // mock
  return new Promise((resolve) => {
    setTimeout(() => {
      if (id === 'my_gift_demo') {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 1000);
  });
}

export function sendGiftAsync(id) {

}
