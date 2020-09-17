console.log('jQuery present and ready to rock and roll - ', $)
const colorsArr = []



$('form').on('submit', (event) => {
    event.preventDefault()
    // console.log('clicked')
    const inputValue = $('#input-box').val();
    colorsArr.push(inputValue)

    //console.log('this is inputValue - ', inputValue)
    //console.log('this is event', event)
    // $('#input-box').val(" ")
    $(event.currentTarget).trigger('reset')

    render()
})

const render = () => {
    const $li = $(`<li class='circle' style=background-color:${colorsArr[colorsArr.length-1]}></li>`)
        //console.log('this is color', color)
        //could've still used forEach method by adding original colors to array and using emptyMEthod
    $('ul').append($li)
    $('li').on('click', (event)=>{
        console.log('li click event - event', event.target)
        const color = $(event.target).css('background-color')
        $('body').css('background',color)
    })
}
$('li').on('click', (event)=>{
    console.log('li click event - event', event.target)
    const color = $(event.target).css('background-color')
    $('body').css('background',color)
})