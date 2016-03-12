  function Medida(valor,tipo)
  {
    console.log("Accedo a clase Medida");
    if(valor)
    {
      if(tipo)
      {
        this.valor = valor || 0;
        this.tipo  = tipo;
      }
      else
      {
        var expresion;
        expresion = match_regexp(valor);
        console.log("Expresion:"+expresion);
        var numero = expresion[1];
        numero = parseFloat(numero);
        var tipo = expresion[2];
        tipo = tipo.toLowerCase();
        this.valor = numero;
        this.tipo = tipo;
        console.log("Valor: " + this.valor + ", Tipo: " + this.tipo);
      }
    }
  }
  Medida.constructor = Medida;
  Medida.measures = Medida.measures || {};

  Medida.match = function(valor)
  {
    console.log("match_regexp");
    console.log("valor->"+valor);
    /*global XRegExp */
    var regexp = XRegExp('^(\\s*)                                         ' +
                    '(?<valor> [-+]?[0-9]+(?:\\.[0-9]+)?(?:e[+-]?[0-9]+)?) ' +
                    '(\\s*)                                               ' +
                    '(?<tipo> [a-z])                                      ' +
                    '(\\s*)                                               ' +
                    '(to)?                                                ' +
                    '(\\s*)                                               ' +
                    '(?<to> [a-z])                                        ' +
                    '(\\s*)$','ix');
    //res = valor.match(regexp);
    var res = XRegExp.exec(valor,regexp);
    console.log("Res->"+res);
    return res;
  }

  Medida.convertir = function(valor) {
    //Medidas
    var measures = Medida.measures;
    measures.c = Celsius;
    measures.k = Kelvin;
    measures.f = Farenheit;
    measures.km = Kilometro;
    measures.m = Metro;
    measures.cm = Centimetro;
    measures.in = Pulgada;
    measures.km3 = Kilometro3;
    measures.m3 = Metro3;
    measures.cm3 = Centimetro3;
    measures.mm3 = Milimetro3;
    measures.l = Litro;

    console.log("Measures:"+measures);
    var match = Medida.match(valor);
    if (match) {
      var numero = match.valor,
          tipo   = match.tipo,
          destino = match.to;
      console.log("Numero:"+numero+",Tipo:"+tipo+",Destino:"+destino);
      try {
        var source = new measures[tipo](numero);  // new Fahrenheit(32)
        var target = "to"+measures[destino].name; // "toCelsius"
        return source[target]().valor.toFixed(2) + " "+measures[destino].name; // "0 Celsius"
      }
      catch(err) {
        return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
      }
    }
    else
      return "Introduzca una temperatura valida: 330e-1 F to C";
  };

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

  function Milimetro(valor)
  {
    Distancia.call(this,valor,'mm');
  }
  Milimetro.prototype = new Distancia;
  Milimetro.prototype.constructor = Milimetro;
  Milimetro.prototype.toKilometro = function()
  {
    return new Kilometro(this.valor/1000000);
  }
  Milimetro.prototype.toCentimetro = function()
  {
    return new Centimetro(this.valor/10);
  }
  Milimetro.prototype.toMetro = function()
  {
    return new Metro(this.valor/1000);
  }


  // ----------------------------------------------------- //

    function Pulgada(valor){
      Distancia.call(this,valor,'in');
    }
    Pulgada.prototype = new Distancia;
    Pulgada.prototype.constructor = Pulgada;
    Pulgada.prototype.toCentimetro = function()
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
        return new Metro3(this.valor * 1000);
    }
    Metro3.prototype.toCentimetro3 = function()
    {
        return new Centimetro3(his.valor * 1000000);
    }
    Metro3.prototype.toMilimetro3 = function()
    {
        return new Milimetro3(this.valor * 1000000000);
    }
    Metro3.prototype.toKilometro3 = function()
    {
        return new Kilometro3(this.valor / 1000000000);
    }
  // ----------------------------------------------------- //
  function Centimetro3(valor)
  {
    Volumen.call(this,valor,'cm3');
  }
  Centimetro3.prototype = new Distancia;
  Centimetro3.prototype.constructor = Centimetro3;
  Centimetro3.prototype.toKilometro3 = function()
  {
    return new Kilometro3(this.valor/1000000000000000);
  }
  Centimetro3.prototype.toMilimetro3 = function()
  {
    return new Centimetro3(this.valor * 1000);
  }
  Centimetro3.prototype.toMetro3 = function()
  {
    return new Metro3(this.valor/1000000);
  }

  // ----------------------------------------------------- //


  function Milimetro3(valor)
  {
    Volumen.call(this,valor,'cm3');
  }
  Milimetro3.prototype = new Distancia;
  Milimetro3.prototype.constructor = Milimetro3;
  Milimetro3.prototype.toKilometro3 = function()
  {
    return new Kilometro3(this.valor/1000000000000000000);
  }
  Milimetro3.prototype.toCentimetro3 = function()
  {
    return new Centimetro3(this.valor / 1000);
  }
  Milimetro3.prototype.toMetro3 = function()
  {
    return new Metro3(this.valor/1000000000);
  }

  // ----------------------------------------------------- //

  function Litro(valor)
  {
    Volumen.call(this,valor,'litro');
  }
  Litro.prototype = new Volumen;
  Litro.prototype.constructor = Litro;
  Litro.prototype.toMetro3 = function()
  {
    return new Metro3(this.valor/1000);
  }
  Litro.prototype.toKilometro3 = function()
  {
    return new Kilometro3(this.valor/1000000000000);
  }
  Litro.prototype.toCentimetro3 = function()
  {
    return new Centimetro3(this.valor * 1000);
  }
