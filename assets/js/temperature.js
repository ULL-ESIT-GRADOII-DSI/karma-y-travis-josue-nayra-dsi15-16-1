// ----------------------------------------------------- //

  function Temperatura(valor,tipo)
  {
    console.log("Accedo a clase Temperatura");
    Medida.call(this,valor,tipo);
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
  }
  Temperatura.prototype = new Medida();
  Temperatura.prototype.constructor = Temperatura;

// ----------------------------------------------------- //

  function Distancia(valor,tipo)
  {
    console.log("Accedo a clase Distancia");
    Medida.call(this,valor,tipo);
  }
  Distancia.prototype = new Medida();
  Distancia.prototype.constructor = Distancia;

// ----------------------------------------------------- //

  function Volumen(valor,tipo)
  {
    console.log("Accedo a clase Volumen");
    Medida.call(this,valor,tipo);
  }
  Volumen.prototype = new Medida();
  Volumen.prototype.constructor = Volumen;

// ----------------------------------------------------- //

  function Celsius(valor)
  {
    var c_tof = 0;
    var c_tok = 0;
    console.log("Accedo a clase Celsius");
    Temperatura.call(this,valor,'c');
  }
  Celsius.prototype = new Temperatura;
  Celsius.prototype.constructor = Celsius;
  Celsius.prototype.toFarenheit = function()
  {
    var c_tof = (this.valor * 9/5) + 32;
    return c_tof;
  }
  Celsius.prototype.toKelvin = function()
  {
    var c_tok = (this.valor + 273.15);
    return c_tok;
  }
// ----------------------------------------------------- //
  function Farenheit(valor)
  {
    var f_toC = 0;
    var f_toK = 0;
    console.log("Accedo a la clase Fahrenheit.");
    Temperatura.call(this,valor,'f');
  }
  Farenheit.prototype = new Temperatura;
  Farenheit.prototype.constructor = Farenheit;
  Farenheit.prototype.toCelsius = function()
  {
      var f_toC = (this.valor - 32) * 5/9;
      return f_toC;
  }
  Farenheit.prototype.toKelvin = function()
  {
    var f_toK = (this.toCelsius() + 273.15);
    return f_toK;
  }

// ----------------------------------------------------- //

  function Kelvin(valor)
  {
    var k_toC = 0;
    var k_toF = 0;
    console.log("Accedo a clase Kelvin");
    Temperatura.call(this,valor,'k');
  }
  Kelvin.prototype = new Temperatura;
  Kelvin.prototype.constructor = Kelvin;
  Kelvin.prototype.toCelsius = function()
  {
    var k_toC = (this.valor - 273.15);
    return k_toC;
  }
  Kelvin.prototype.toFarenheit = function()
  {
    var k_toF = (this.toCelsius() * 9/5) + 32;
    return k_toF;
  }
// ----------------------------------------------------- //

  function Kilometro(valor)
  {
    Distancia.call(this,valor,'Km');

  }
  Kilometro.prototype = new Distancia;
  Kilometro.prototype.constructor = Kilometro;
  Kilometro.prototype.toM = function()
  {
    return this.valor * 1000;
  }
  Kilometro.prototype.toCm = function()
  {
    return this.valor * 10000;
  }
  Kilometro.prototype.toMm = function()
  {
    return this.valor * 1000000;
  }

// ----------------------------------------------------- //

  function Centimetro(valor)
  {
    Distancia.call(this,valor,'cm');

  }
  Centimetro.prototype = new Distancia;
  Centimetro.prototype.constructor = Centimetro;
  Centimetro.prototype.toM = function()
  {
    return this.valor / 100;
  }
  Centimetro.prototype.toKm = function()
  {
    return this.valor / 10000;
  }
  Centimetro.prototype.toMm = function()
  {
    return this.valor * 10;
  }
  Centimetro.prototype.toIn = function()
  {
    return this.valor * 0.39370;
  }

// ----------------------------------------------------- //

  function Metro(valor)
  {
    Distancia.call(this,valor,'m');
  }
  Metro.prototype = new Distancia;
  Metro.prototype.constructor = Metro;
  Metro.prototype.toKm = function()
  {
    return this.valor / 1000;
  }
  Metro.prototype.toCm = function()
  {
    return this.valor * 100;
  }
  Metro.prototype.toMm = function()
  {
    return this.valor * 1000;
  }

// ----------------------------------------------------- //

  function Pulgada(valor){
    Distancia.call(this,valor,'in');
  }
  Pulgada.prototype = new Distancia;
  Pulgada.prototype.constructor = Pulgada;
  Pulgada.prototype.toCm = function()
  {
      return this.valor / 0.39370;
  }

// ----------------------------------------------------- //

  function Metro3(valor)
  {
    Volumen.call(this,valor,'metro cubico');
  }
  Metro3.prototype = new Volumen;
  Metro3.prototype.constructor = Metro3;
  Metro3.prototype.toLitro = function()
  {
      return this.valor * 1000;
  }
  Metro3.prototype.toCm3 = function()
  {
      return this.valor * 1000000;
  }
  Metro3.prototype.toMm3 = function()
  {
      return this.valor * 1000000000;
  }
// ----------------------------------------------------- //
