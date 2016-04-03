(function(exports){
  
    var measures = Medida.measures || {};

    function Distancia(valor,tipo)
    {
      if (!valor){
        console.error("No se ha introducido ningun valor");
        return false;
      }
      else{
        Medida.call(this,valor,tipo);
      }
    }
    Distancia.prototype = new Medida();
    Distancia.prototype.constructor = Distancia;

  // ----------------------------------------------------- //
  
    function Kilometro(valor)
    {
      Distancia.call(this,valor,'Km');
    }
    Kilometro.prototype = new Distancia;
    Kilometro.prototype.constructor = Kilometro;
    measures.km = Kilometro;
    Kilometro.prototype.toMetro = function()
    {
      //console.log("Accedo al tometro auxiliar");
      var aux = this.valor * 1000;
      return new Metro(aux);
    }
    Kilometro.prototype.toCentimetro = function()
    {
      var aux = this.valor * 100000;
      return new Kilometro(aux);
    }
    Kilometro.prototype.toMilimetro = function()
    {
      var aux = this.valor * 1000000;
      return new Milimetro(aux);
    }
    Kilometro.prototype.toPulgada = function()
    {
      var aux = this.toCentimetro().valor * 0.39370;
      return new Pulgada(aux);
    }

  // ----------------------------------------------------- //

    function Centimetro(valor)
    {
      Distancia.call(this,valor,'cm');

    }
    Centimetro.prototype = new Distancia;
    Centimetro.prototype.constructor = Centimetro;
    measures.cm = Centimetro;
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
    measures.m = Metro;
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
      return new Pulgada(this.toCentimetro().valor * 0.39370);
    }

  // ----------------------------------------------------- //

    function Milimetro(valor)
    {
    Distancia.call(this,valor,'mm');
    }
    Milimetro.prototype = new Distancia;
    Milimetro.prototype.constructor = Milimetro;
    measures.mm = Milimetro;
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
    Milimetro.prototype.toPulgada = function()
    {
        return new Pulgada(this.toCentimetro().valor * 0.39370);
    }

  // ----------------------------------------------------- //

    function Pulgada(valor){
      Distancia.call(this,valor,'in');
    }
    Pulgada.prototype = new Distancia;
    Pulgada.prototype.constructor = Pulgada;
    measures.p = Pulgada;
    Pulgada.prototype.toCentimetro = function()
    {
        return new Centimetro(this.valor / 0.39370);
    }
    Pulgada.prototype.toMetro = function()
    {
        return new Metro(this.toCentimetro().valor / 100);
    }
    Pulgada.prototype.toMilimetro = function()
    {
        return new Milimetro(this.toCentimetro().valor * 10);
    }   
    Pulgada.prototype.toKilometro = function()
    {
        return new Kilometro(this.toCentimetro().valor / 100000);
    }
    
    exports.Distancia = Distancia;
    exports.Kilometro = Kilometro;
    exports.Metro = Metro;
    exports.Centimetro = Centimetro;
    exports.Milimetro = Milimetro;
    exports.Pulgada = Pulgada;
})(this);