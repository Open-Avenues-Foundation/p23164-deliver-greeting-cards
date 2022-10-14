const Lob = require('lob')('YOUR API KEY HERE');

async function createPostcard () {
  try {
    const res = await Lob.postcards.create({
      to: "adr_846654b8de3640a9",
      front: "<h1> HI",
      back: "<h1> HI"
    })
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

(async () => {
  createPostcard();
})();
