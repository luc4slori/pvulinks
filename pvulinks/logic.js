const grid = document.getElementById("grid");

const createButton = (id, address, link = 0, visited) => {
    let html = "";
    html += `<div id=btn${id} btn-id=${id} class="col s4 btn-wallet" style="margin-top: 0.3em;" onauxclick=changeColor(this) onclick=changeColor(this)>`
        html += `<a href="${link}" class="waves-effect waves-light btn grey darken-1" target="_blank" style="width: 100%;">`;
        html += address;
        html += '</a>';
    html += '</div>'
    return html;
}

lords.forEach((el, index) => {
    grid.innerHTML += createButton(index, el.address, el.link, el.visited);
});

const changeColor = (el) => {
    const anchor = el.children[0];
    if (!anchor.classList.contains('visited')){
        anchor.classList.remove('grey');
        anchor.classList.remove('darken-1');
        anchor.classList.add('green');
        anchor.classList.add('darken-1');
        anchor.classList.add('visited');
    }
}


