exports.user = (req, res, next) => {

  const result = {
    nama : 'Fia Alfiatu Amanah',
    gender : 'wanita',
    tanggal_lahir : '18 Maret 1997',
    email : 'fiaalfiatuamanah18@gmail.com',
    username : 'fiaa_',
    password : 'fiaa1234'
  }
  
  res.status(201).json({
    message : "Data User!",
    data : result
  })
}