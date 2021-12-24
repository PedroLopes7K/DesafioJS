let Num = '53590'
let teste2 = '52396789'
let teste3 = '9012374345653903'
// [0, 1 ,2,3,4,5,6,7,8,9,0]
let newArray = []
let arraySqc = []

function getNum(num) {
  for (let i = 0; i < num.length; i++) {
    newArray.push(Number(num[i]))
  }

  verify(newArray)
}

function verify(array) {
  let resultSQC = ''
  for (let a = 1; a < array.length; a++) {
    if (array[a - 1] + 1 == array[a] || array[a - 1] - 9 == array[a]) {
      if (resultSQC == '') {
        resultSQC = array[a - 1].toString() + array[a].toString()
      } else {
        resultSQC += array[a].toString()
      }
    } else {
      if (resultSQC !== '') {
        arraySqc.push(resultSQC)
      }
      resultSQC = ''
    }
  }
  if (resultSQC !== '') {
    arraySqc.push(resultSQC)
  }
  console.log(arraySqc)

  let maior = ''
  let acount = arraySqc[0]
  for (let f = 1; f < arraySqc.length; f++) {
    if (acount > arraySqc[f]) {
      maior = acount
    } else {
      maior = arraySqc[f]
    }
  }

  console.log(maior)
}

getNum(teste3)
