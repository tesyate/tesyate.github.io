(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
        "with(obj){p.push('" +
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
    return data ? fn( data ) : fn;
  };
})();


$(function(){

  var dataObject = {
    members:[
    {id:1, name:"ТЕСЕНЧУК АНТОН ОЛЕКСАНРОВИЧ", text:"<img src='img/image1.jpg'> <br /> Студент КПІ ім. І. Сікорського"},
    {id:9, name:"Хочу вчити фронтенд тому, що", text:"<li>Не влаштовує власна спеціальність</li><li>Хочу поїхати працювати в іншу країну</li><li>Хочу стати тру прогером))</li>"},
    {id:15, name:"Мій контакний номер", text:"+380661051865"},
    {id:22, name:"Мій профіль в вк", text:"<a href='http://vk.com/paker_bc'>Антон Тесенчук</a>"},
    {id:78, name:"Мій фідбек", text:"Я стараюсь"}
    ]
  }; 

  var results = document.getElementById("results");
  results.innerHTML = tmpl("item_tmpl", dataObject);

});