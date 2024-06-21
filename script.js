function formatText(format){
    const textInput = document.getElementById('input').value;
    const textOutput = document.getElementById('output');

    switch (format) {
        case 'underline':
            textOutput.classList.toggle('underline');
            break;
        case 'bold':
            textOutput.classList.toggle('bold');
            break;
        case 'italic':
            textOutput.classList.toggle('italic');
            break;
        case 'linethrough':
            textOutput.classList.toggle('linethrough');
            break;
        default:
            break;
    }
    return textOutput.innerText = textInput;
}

function reset(){
    document.getElementById('input').value = '';
    document.getElementById('output').innerHTML = '';
}