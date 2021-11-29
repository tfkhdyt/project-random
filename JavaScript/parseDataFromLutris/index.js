const { get } = require('axios');

(async () => {
  const link = process.argv[2]
  const data = await get(link)
    .then((res) => res.data)
    .then((data) => data.results[0])
  // console.log(data);
  console.log(`Judul game  : ${data.name} 
Tahun rilis : ${data.year} 
Uploader    : ${data.user} 
Versi       : ${data.version} 
Catatan     :
${data.notes}`)
})()
