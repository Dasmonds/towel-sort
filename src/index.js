
module.exports = function towelSort (matrix) {
  let b = []
  if (matrix) {
    b = matrix.reduce((acc, cur, i) => {
      return acc.concat((!(i % 2) ? cur : cur.reverse()));
    }, [])
  }
  
  return b
}
