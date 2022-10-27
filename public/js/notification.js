const trashIcon = [...document.querySelectorAll('.gg-trash')]
const plus = [...document.querySelectorAll('.gg-math-plus')]
const minus = [...document.querySelectorAll('.gg-math-minus')]

plus.forEach(e =>{ e.addEventListener('click', likeOne)})
minus.forEach(e =>{ e.addEventListener('click', dislikeOne)})
trashIcon.forEach(e =>{ e.addEventListener('click',deleteOne)})

async function deleteOne(){
    const id = this.parentNode.dataset.id
    response = await fetch('/notification/deleteOne',{
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'id': id
        })
      })
      data = await response.json()
      console.log(data)
        location.reload()
}

async function likeOne(){
    const id = this.parentNode.dataset.id
    response = await fetch('/notification/likeOne',{
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'id': id
        })
      })
      data = await response.json()
        location.reload()
}

async function dislikeOne(){
    const id = this.parentNode.dataset.id
    console.log(id)
    response = await fetch('/notification/dislikeOne',{
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'id': id
        })
      })
      data = await response.json()
        location.reload()
}