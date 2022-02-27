(() => {
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
const $cd43b3484c5c8a45$export$aaea0094c1c69714 = (greeting, first, last)=>console.log(`Hello, ${first} ${last}!`)
;


var $d301fa1c40f616e3$exports = {};
$d301fa1c40f616e3$exports = JSON.parse("{\"en\":\"Hello\",\"es\":\"Hola\",\"fr\":\"Salut\",\"ru\":\"Привет\",\"jp\":\"こんにちは\"}");


document.onload = async ()=>{
    const response = await fetch("/api/identity");
    const { firstName: firstName , lastName: lastName , language: language  } = await response.json();
    const translatedGreeting = (/*@__PURE__*/$parcel$interopDefault($d301fa1c40f616e3$exports))[language];
    $cd43b3484c5c8a45$export$aaea0094c1c69714(translatedGreeting, firstName, lastName);
};

})();
//# sourceMappingURL=index.js.map
