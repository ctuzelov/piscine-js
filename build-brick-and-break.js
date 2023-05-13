export function build(max){
    let id = 1
    const body = document.querySelector('body')
    const Interval = setInterval(place, 100)
    function place(){
        if (id == max){
            clearInterval(Interval)
        }
        let div = document.createElement('div')
        div.id = `brick-${id}`
        if (id % 3 == 2) {
            div.dataset.foundation = true
        }
        body.append(div)
        id++
    }
    return
}

export const repair = (...ids) => {
    for (let index = 0; index < ids.length; index++) {
        const element = ids[index];
        const block = document.querySelector('#' + element)
        const idNum = parseInt(element.match(/\d+/))
        if (idNum % 3 == 2) {
            block.dataset.repaired = 'in progress'
        } else {
            block.dataset.repaired = true
        }
    }
    return
}
export const destroy = () => {
    let id = 1
    const bricks = []
    while (true) {
        const brick = document.querySelector('#brick-' + id)
        if (brick == null) {
            break
        }
        bricks.push(brick)
        id++
    }
    if (bricks == null) {
        return
    }
    const last = bricks.pop()
    last.remove()
    return
}