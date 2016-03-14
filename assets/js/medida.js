(function(exports){

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
        var regexp = /^\s*([-+]?\d+(?:\.\d*)?\s*(?:e[+-]?\d+)?)\s*([a-z])+\s*$/i;
        expresion = valor.match(regexp);
        console.log("Expresion:"+expresion);
        if(expresion)
        {
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
                    '(?<tipo> [a-zA-Z]+(3)?)                                      ' +
                    '(\\s*)                                               ' +
                    '(to)?                                                ' +
                    '(\\s*)                                               ' +
                    '(?<to> [a-zA-Z]+(3)?)                                        ' +
                    '(\\s*)$','ix');
    //res = valor.match(regexp);
    var res = XRegExp.exec(valor,regexp);
    console.log("Res->"+res);
    return res;
  }

  Medida.convertir = function(valor) {
    var measures = Medida.measures;
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
        console.log("Return:"+source[target]().valor);
        return source[target]().valor + " "+measures[destino].name; // "0 Celsius"
        //return source[target]() + " " + measures[destino].name;
      }
      catch(err) {
        if (tipo == destino){
          return numero + " " + destino;
        }
        else{
          return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
        }
      }
    }
    else
      return "Introduzca una temperatura valida: 330e-1 F to C";
  };

  exports.Medida = Medida;
  
})(this);