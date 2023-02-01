function matchProfile() {
    let hobbiesA = [];
    let hobbiesB = [];
    let hobbiesCommon = [];

    inputsA = document.getElementById('FriendshipA').querySelectorAll('input');
    inputsB = document.getElementById('FriendshipB').querySelectorAll('input');
    inputsA.forEach(input => hobbiesA.push(input.value));
    inputsB.forEach(input => hobbiesB.push(input.value));


    hobbiesCommon = hobbiesA.filter(hobby => hobbiesB.includes(hobby));

    document.getElementById('output').innerHTML = null;
    hobbiesCommon.forEach(hobby => {
        let li = document.createElement('li');
        li.innerText = hobby;
        li.style.color = "green"
        
        document.getElementById('output').appendChild(li)
    })

}

document.getElementById("show").addEventListener('click', matchProfile);