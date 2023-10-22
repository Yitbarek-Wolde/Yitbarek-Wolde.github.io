function addTable(){
    let something = document.querySelectorAll('input[name="inputBoxx"]')
    for (let inputValues of something) {
        document.querySelector('table').append(document.createElement('td').append(document.createElement('tr').append(inputValues.value)))
    }
    
}