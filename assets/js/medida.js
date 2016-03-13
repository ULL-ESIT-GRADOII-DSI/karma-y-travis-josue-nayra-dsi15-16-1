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
    var regexp = XRegExp('^(\\s*)                                          ' +
                    '(?<valor> [-+]?[0-9]+(?:\\.[0-9]+)?(?:e[+-]?[0-9]+)?) ' +
                    '(\\s*)                                               ' +
                    '(?<tipo> [a-zA-Z]+)                                   ' +
                    '(\\s*)                                               ' +
                    '(to)?                                                ' +
                    '(\\s*)                                               ' +
                    '(?<to> [a-zA-Z]+)                                        ' +
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
    measures.mm = Milimetro;
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
      tipo = tipo.toLowerCase();
      destino = destino.toLowerCase();
      console.log("Numero:"+numero+",Tipo:"+tipo+",Destino:"+destino);
      try {
        var source = new measures[tipo](numero);  // new Fahrenheit(32)
        console.log("Source:"+source);
        var target = "to"+measures[destino].name; // "toCelsius"
        console.log("Target:"+target);
        console.log("Return:"+source[target]());
        return source[target]().valor + " "+measures[destino].name; // "0 Celsius"
      }
      catch(err) {
        return 'Desconozco como convertir desde "'+ tipo +'" hasta "'+ destino+'"';
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
      return new Farenheit((this.toCelsius() * 9/5) + 32);
    }
  // ----------------------------------------------------- //

    function Kilometro(valor)
    {
      Distancia.call(this,valor,'Km');

    }
    Kilometro.prototype = new Distancia;
    Kilometro.prototype.constructor = Kilometro;
    Kilometro.prototype.toMetro = function()
    {
      return new Metro(this.valor * 1000);
    }
    Kilometro.prototype.toCentimetro = function()
    {
      return new Centimetro(this.valor * 10000);
    }
    Kilometro.prototype.toMilimetro = function()
    {
      return new Milimetro(this.valor * 1000000);
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
      return new Milimetro(this.valor * 10);
    }
    Centimetro.prototype.toPulgada = function()
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
      return new Milimetro(this.valor * 1000);
    }
    Metro.prototype.toPulgada = function()
    {
      return this.toCentimetro() * 0.39370;
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
        return new Centimetro(this.valor / 0.39370);
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
        return new Litro(this.valor * 1000);
    }
    Metro3.prototype.toCentimetro3 = function()
    {
        return new Centimetro3(this.valor * 1000000);
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
        return new Milimetro3(this.valor * 1000);
    }
    Centimetro3.prototype.toMetro3 = function()
    {
        return new Metro3(this.valor/1000000);
    }

  // ----------------------------------------------------- //


    function Kilometro3(valor)
    {
        Volumen.call(this,valor,'cm3');
    }
    Kilometro3.prototype = new Distancia;
    Kilometro3.prototype.constructor = Kilometro3;
    Kilometro3.prototype.toMilimetro3 = function()
    {
        return new Milimetro3(this.valor * 1000000000000000000);
    }
    Kilometro3.prototype.toCentimetro3 = function()
    {
        return new Centimetro3(this.valor * 1000000000000000);
    }
    Kilometro3.prototype.toMetro3 = function()
    {
        return new Metro3(this.valor * 1000000000);
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
