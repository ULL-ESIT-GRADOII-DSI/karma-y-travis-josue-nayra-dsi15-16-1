var expect = chai.expect;

//Pruebas para la clase Medida.
describe('Medida', function() {
  
  var medida1 = new Medida("45","km");
  var medida2 = new Medida("45km");
  var medida3 = new Medida("77 m");
  
  
  describe('Construccion',function()
  {
      it('Se crean los objetos medida1, medida2, medida3',function()
      {
        expect(medida1).to.be.an('object');
        expect(medida1).to.exist;
        expect(medida1).to.not.be.null;
        expect(medida2).to.be.an('object');
        expect(medida2).to.exist;
        expect(medida2).to.not.be.null;
        expect(medida3).to.be.an('object');
        expect(medida3).to.exist;
        expect(medida3).to.not.be.null;
      });
      it('Se construye medida pasandole al constructor: Valor y Tipo', function () {
        expect(medida1).to.not.be.null;
        expect(medida1.valor).to.equal("45");
        expect(medida1.tipo).to.equal("km");
      });
      it('Se construye medida pasandole al constructor: Valor',function(){
        expect(medida2.valor).to.not.be.empty;
        expect(medida2.tipo).to.not.be.empty;
        expect(medida2.valor).to.equal(45);
        expect(medida2.tipo).to.equal("km");
      });   
      it('Los objetos medida1, medida2 y medida3 son instancias de Medida',function()
      {
        expect(medida1).to.be.an.instanceof(Medida);
        expect(medida2).to.be.an.instanceof(Medida);
        expect(medida3).to.be.an.instanceof(Medida);
      });
      it('Los objetos medida1, medida2 y medida3 tienen los atributos: valor y tipo',function()
      {
        expect(medida1).to.have.property('valor');
        expect(medida1).to.have.property('tipo');
      });
  });

  describe('Comparando las medidas',function()
    {
      it('El valor y tipo de los objetos medida1 y medida2 son iguales',function()
      {
        expect(medida1.valor).to.be.equal(medida2.valor);
        expect(medida1.tipo).to.be.equal(medida2.tipo);
      });
      it('El valor y tipo de los objetos medida3 y medida1 o medida2 son diferentes',function()
      {
        expect(medida3.valor).to.not.be.equal(medida1.valor);
        expect(medida3.valor).to.not.be.equal(medida2.valor);
        expect(medida3.tipo).to.not.be.equal(medida1.tipo);
        expect(medida3.tipo).to.not.be.equal(medida2.tipo);
    
      });
      it('El valor del objeto medida3 es mayor que el valor del objeto medida1',function()
      {
        expect(medida1.valor).to.not.be.above(medida3.valor);
        expect(medida3.valor).to.be.above(medida2.valor);
      });  
      it('El valor del objeto medida1 es menor que el valor del objeto medida3',function()
      {
        expect(medida1.valor).to.be.below(medida3.valor);
      }); 
      it('El valor de los objetos medida1, medida2 y medida3 esta dentro del rango 40-100',function()
      {
        expect(medida1.valor).to.be.within(40,100);
        expect(medida2.valor).to.be.within(40,100);
        expect(medida3.valor).to.be.within(40,100);
      });
      it('El valor de los objetos medida1 y medida2 no esta dentro del rango 50-100',function()
      {
        expect(medida1.valor).to.not.be.within(50,100);
        expect(medida2.valor).to.not.be.within(50,100);
      });
    });
    
    
    describe('Pruebas y casos',function()
    {
        it('Medida1, medida2 y medida3 hacen match con la regexp',function()
        {
          var auxiliar = medida1.valor + " " + medida1.tipo;
          var auxiliar1 = medida2.valor + " " + medida2.tipo;
          var auxiliar2 = medida3.valor + " " + medida3.tipo;
          expect(auxiliar).to.match(/^\s*([-+]?\d+(?:\.\d*)?(?:e[+-]?\d+)?)\s*[a-z][a-z0-9]*$/i);
          expect(auxiliar1).to.match(/^\s*([-+]?\d+(?:\.\d*)?(?:e[+-]?\d+)?)\s*[a-z][a-z0-9]*$/i);
          expect(auxiliar2).to.match(/^\s*([-+]?\d+(?:\.\d*)?(?:e[+-]?\d+)?)\s*[a-z][a-z0-9]*$/i);
        });
        it('Creando objeto Medida con un solo parámetro',function()
        {
            var aux = new Medida("50c");
            expect(aux.valor).to.be.equal(50);
            expect(aux.tipo).to.be.equal("c");
        }); 
        it('Devolviendo desconozco como se puede... en función convertir',function()
        {
            var aux = "1p to z";
            var res = Medida.match(aux);
            var tipo = res.tipo;
            var destino = res.to;
            console.log("Tipo->"+tipo);
            console.log("Destino->"+destino);
            
            expect(Medida.convertir("1p to z")).to.be.equal("Desconozco como convertir desde "+tipo+" hasta "+destino); 
        });
        it('Devolviendo Introduzca una temperatura...',function()
        {
            var aux = "1z"; //No especificamos destino alguno.
            expect(Medida.convertir(aux)).to.be.equal("Introduzca una temperatura valida: 330e-1 F to C");
        });
  });

});
describe('Temperatura',function()
{
  var t1 = new Temperatura(100,"C");
  var t2 = new Temperatura(200,"F");
  var t3 = new Temperatura(300,"K");
  var c1 = new Celsius(10);
  var f1 = new Farenheit(20);
  var k1 = new Kelvin(400);
  
  describe('Construccion',function()
  {
    it('Los objetos t1,t2 y t3 son instancias de la clase Temperatura y Medida',function()
    {
        expect(t1).to.be.an.instanceof(Medida);
        expect(t1).to.be.an.instanceof(Temperatura);
        expect(t1).to.exist;
        expect(t1).to.not.be.null;
        expect(t2).to.be.an.instanceof(Medida);
        expect(t2).to.be.an.instanceof(Temperatura);
        expect(t2).to.exist;
        expect(t2).to.not.be.null;
        expect(t3).to.be.an.instanceof(Medida);
        expect(t3).to.be.an.instanceof(Temperatura);
        expect(t3).to.exist;
        expect(t3).to.not.be.null;
    });
    it('Se crea un objeto de tipo Celsius',function()
    {
        expect(c1).to.be.an.instanceof(Medida);
        expect(c1).to.be.an.instanceof(Temperatura);
        expect(c1).to.be.an.instanceof(Celsius);
        expect(c1).to.exist;
    });
    it('Para el objeto Celsius, existe un metodo toFarenheit y toKelvin',function()
    {
        expect(c1).to.respondTo('toFarenheit');
        expect(c1).to.respondTo('toKelvin');
    })
    it('Se crea un objeto de tipo Farenheit',function()
    {
        expect(f1).to.be.an.instanceof(Medida);
        expect(f1).to.be.an.instanceof(Temperatura);
        expect(f1).to.be.an.instanceof(Farenheit);
        expect(f1).to.exist;      
    });
    it('Para el objeto Farenheit, existe un metodo toCelsius y toKelvin',function()
    {
        expect(f1).to.respondTo('toCelsius');
        expect(f1).to.respondTo('toKelvin');
    });
    it('Se crea un objeto de tipo Kelvin',function()
    {
        expect(k1).to.be.an.instanceof(Medida);
        expect(k1).to.be.an.instanceof(Temperatura);
        expect(k1).to.be.an.instanceof(Kelvin);
        expect(k1).to.exist;      
    });
    it('Para un objeto Kelvin, existe un metodo toCelsius y toFarenheit',function()
    {
        expect(k1).to.respondTo('toCelsius');
        expect(k1).to.respondTo('toFarenheit');
    });
  });
});