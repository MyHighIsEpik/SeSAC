const data = [
  {
    id: 1,
    name: '[키친르쎌] 칠리소스 포크립 650g',
    image: '/img/img01.png'
  },
  {
    id: 2,
    name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
    image: '/img/img02.jpg'
    
  }
]

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}