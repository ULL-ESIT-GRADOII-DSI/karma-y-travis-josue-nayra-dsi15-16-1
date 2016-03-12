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
    console.log("Accedo a clase Celsius");
    Temperatura.call(this,valor,'c');
  }
  Celsius.prototype = new Temperatura;
  Celsius.prototype.constructor = Celsius;
  Celsius.prototype.toFarenheit = function()
  {
    return new Farenheit((this.valor * 9/5) + 32);
  }
  Celsius.prototype.toKelvin = function()
  {
    return new Kelvin(this.valor + 273.15);
  }
// ----------------------------------------------------- //
  function Farenheit(valor)
  {
    console.log("Accedo a la clase Fahrenheit.");
    Temperatura.call(this,valor,'f');
  }
  Farenheit.prototype = new Temperatura;
  Farenheit.prototype.constructor = Farenheit;
  Farenheit.prototype.toCelsius = function()
  {
      return new Celsius((this.valor - 32) * 5/9);
  }
  Farenheit.prototype.toKelvin = function()
  {
    return new Kelvin(this.toCelsius() + 273.15);
  }

// ----------------------------------------------------- //

  function Kelvin(valor)
  {
    console.log("Accedo a clase Kelvin");
    Temperatura.call(this,valor,'k');
  }
  Kelvin.prototype = new Temperatura;
  Kelvin.prototype.constructor = Kelvin;
  Kelvin.prototype.toCelsius = function()
  {
    return new Celsius(this.valor - 273.15);
  }
  Kelvin.prototype.toFarenheit = function()
  {
    return new Farenheit((this.toCelsius().valor * 9/5) + 32);
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
    return new Metro(this.valor * 1000);
  }
  Kilometro.prototype.toCentimetro = function()
  {
    return new Centimetro(this.valor * 10000);
  }
  Kilometro.prototype.toMilimetro = function()
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
  Centimetro.prototype.toMetro = function()
  {
    return new Metro(this.valor / 100);
  }
  Centimetro.prototype.toKilometro = function()
  {
    return new Kilometro(this.valor / 10000);
  }
  Centimetro.prototype.toMilimetro = function()
  {
    return this.valor * 10;
  }
  Centimetro.prototype.toInch = function()
  {
    return new Pulgada(this.valor * 0.39370);
  }

// ----------------------------------------------------- //

  function Metro(valor)
  {
    Distancia.call(this,valor,'m');
  }
  Metro.prototype = new Distancia;
  Metro.prototype.constructor = Metro;
  Metro.prototype.toKilometro = function()
  {
    return new Kilometro(this.valor / 1000);
  }
  Metro.prototype.toCentimetro = function()
  {
    return new Centimetro(this.valor * 100);
  }
  Metro.prototype.toMilimetro = function()
  {
    return this.valor * 1000;
  }

// ----------------------------------------------------- //

  function Pulgada(valor)
  {
    Distancia.call(this,valor,'in');
  }
  Pulgada.prototype = new Distancia;
  Pulgada.prototype.constructor = Pulgada;
  Pulgada.prototype.toCentimetro = function()
  {
      return new Centimetro(this.valor / 0.39370);
  }

  Metro3.prototype = new Volumen;
  Metro3.prototype.constructor = Metro3;
  Metro3.prototype.toLitro = function()
  {
      return this.valor * 1000;
  }
  Metro3.prototype.toCentimetro3 = function()
  {
      return this.valor * 1000000;
  }
  Metro3.prototype.toMilimetro3 = function()
  {
      return this.valor * 1000000000;
  }
// ----------------------------------------------------- //
