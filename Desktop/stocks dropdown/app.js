"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const select = document.getElementById('dropdown');
const p1 = document.getElementById('a');
const p2 = document.getElementById('b');
const p3 = document.getElementById('c');
const p4 = document.getElementById('d');
const p5 = document.getElementById('e');
function populate() {
    return __awaiter(this, void 0, void 0, function* () {
        const API_KEY = 'jzcQMRiV8B2mmMLwcAkYsi9s2Yt_axI_';
        const API_URL = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2020-10-14?adjusted=true&apiKey=${API_KEY}`;
        const res = yield fetch(API_URL);
        const data = yield res.json();
        let obj = {};
        for (let item of data['results']) {
            obj[item.T] = item;
        }
        //console.log(obj);
        const newArray = data['results'].map((item) => {
            return `<option value = ${item.T} > ${item.T} </option>`;
        });
        let html;
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
    });
}
populate();
function camelToViper(key) {
    let result = key.replace(/([A-Z])/g, " $1");
    return result.split(' ').join('_').toLowerCase();
}
console.log(camelToViper('someThing'));
function viper_to_camel(key) {
    let result = key.replace(/([A-Z])/g, " $1 ");
    return result.split('_').join('');
}
console.log(viper_to_camel('some_thing'));
