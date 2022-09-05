exports.user = (req, res, next) => {

  const username = 'fia';
  const sandi = 'fia123';

  const result = {
    username,
    sandi
  }
  
  res.status(201).json({
    message : "Data User!",
    data : result
  })
}