exports.user = (req, res, next) => {

  const username = 'fia';
  const password = 'fia123';

  const result = {
    username,
    password
  }
  
  res.status(201).json({
    message : "Data User!",
    data : result
  })
}