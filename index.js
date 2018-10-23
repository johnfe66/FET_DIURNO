var _valorAnterior = 0;
var _valorNuevo = 0;

const _SUMAR = 1;
const _RESTAR = 2;
const _MULTIPLICAR = 3;
const _DIVIDIR = 4;
const _IGUAL = 0;
const _NINGUNO = -1;

var _comandoAnterior = -1;
var _resultado = 0;

function acciones_boton(){



}

function acciones() {
  switch (_comandoAnterior) {
    case _SUMAR:

      _resultado = _valorAnterior + _valorNuevo;
      break;
    case _RESTAR:
      _resultado = _valorAnterior - _valorNuevo;
      break;
    case _DIVIDIR:
      _resultado = _valorAnterior / _valorNuevo;
      break;
    case _MULTIPLICAR:
      _resultado = _valorAnterior * _valorNuevo;
      break;

      default : break;
  }
}



function _sumar() {
    _valorAnterior = document.getElementById("id-h1").innerText;
    _comandoAnterior = _SUMAR;
    console.log(_comandoAnterior);
  }

  function _restar() {
    _valorAnterior = document.getElementById("id-h1").innerText;
    _comandoAnterior = _RESTAR;
    console.log(_comandoAnterior);
  }

  function _multiplicar() {
    _valorAnterior = document.getElementById("id-h1").innerText;
    _comandoAnterior = _MULTIPLICAR;
    console.log(_comandoAnterior);
  }

  function _dividir() {
    _valorAnterior = document.getElementById("id-h1").innerText;
    _comandoAnterior = _DIVIDIR;
    console.log(_comandoAnterior);
  }

  function _igual() {
    _valorAnterior = document.getElementById("id-h1").innerText;
    _comandoAnterior = _IGUAL;
    console.log(_comandoAnterior);
  }

function _delete() {
  document.getElementById("id-h1").innerText = `0`;
}

function _quitar0() {
  if (document.getElementById("id-h1").innerText == "0") {
    document.getElementById("id-h1").innerText = "";
  }
}

function _btn1() {
  _quitar0();
  document.getElementById("id-h1").innerText = ` ${document.getElementById(
    "id-h1"
  ).innerText}1`;
}

function _btn2() {
  _quitar0();
  document.getElementById("id-h1").innerText = ` ${document.getElementById(
    "id-h1"
  ).innerText}2`;
}

function _btn3() {
  _quitar0();
  document.getElementById("id-h1").innerText = ` ${document.getElementById(
    "id-h1"
  ).innerText}3`;
}
function _btn4() {
  _quitar0();
  document.getElementById("id-h1").innerText = ` ${document.getElementById(
    "id-h1"
  ).innerText}4`;
}
function _btn5() {
  _quitar0();
  document.getElementById("id-h1").innerText = ` ${document.getElementById(
    "id-h1"
  ).innerText}5`;
}
function _btn6() {
  _quitar0();
  document.getElementById("id-h1").innerText = ` ${document.getElementById(
    "id-h1"
  ).innerText}6`;
}

function _btn7() {
  _quitar0();
  document.getElementById("id-h1").innerText = ` ${document.getElementById(
    "id-h1"
  ).innerText}7`;
}
function _btn8() {
  _quitar0();
  document.getElementById("id-h1").innerText = ` ${document.getElementById(
    "id-h1"
  ).innerText}8`;
}

function _btn9() {
  _quitar0();
  document.getElementById("id-h1").innerText = ` ${document.getElementById(
    "id-h1"
  ).innerText}9`;
}

function _btn0() {
  _quitar0();
  document.getElementById("id-h1").innerText = ` ${document.getElementById(
    "id-h1"
  ).innerText}0`;
}
