const select = document.getElementById('dropdown') as HTMLSelectElement;
const p1 = document.getElementById('a') as HTMLTableCellElement;
const p2 = document.getElementById('b') as HTMLTableCellElement;
const p3 = document.getElementById('c') as HTMLTableCellElement;
const p4 = document.getElementById('d') as HTMLTableCellElement;
const p5 = document.getElementById('e') as HTMLTableCellElement;

async function populate() {
    const API_KEY = 'jzcQMRiV8B2mmMLwcAkYsi9s2Yt_axI_';
    const API_URL = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2020-10-14?adjusted=true&apiKey=${API_KEY}`;

    const res = await fetch(API_URL);
    const data = await res.json();

    let obj: any = {};
    for (let item of data['results']) {
        obj[item.T] = item;
    }
    //console.log(obj);
    const newArray = data['results'].map((item: any) => {
        return `<option value = ${item.T} > ${item.T} </option>`
    });
    let html: any;
    for (let i = 0; i < 200; i++) {

        html += newArray[i];
        select.innerHTML = html;
    }
    select.addEventListener('change', () => {

        p1.innerHTML = obj[select.value].o;
        p2.innerHTML = obj[select.value].c;
        p3.innerHTML = obj[select.value].h;
        p4.innerHTML = obj[select.value].l;
        p5.innerHTML = obj[select.value].v;
    });
}
populate();



