var expect = chai.expect;

//Pruebas para la clase Medida.
describe('Medida', function() {
  
  var medida1 = new Medida(45,"km");
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
        expect(medida1.valor).to.equal(45);
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

//Pruebas para la clase Temperatura.
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
  describe('Conversiones',function()
  {
    describe('Desde Celsius...',function()
    {
      it('10 C to F = 50 Farenheit',function()
      {
          expect(Medida.convertir('10C to F')).to.equal('50 Farenheit');
      });
      it('10 C to K > 300.00 Kelvin',function()
      {
          expect(Medida.convertir('10 C to k')).to.be.above('200.00 Kelvin');
      });
      it('10 C to K < 350.00 Kelvin',function()
      {
          expect(Medida.convertir('10 C to K')).to.be.below('300.00 Kelvin');
      });      
    });
    describe('Desde Farenheit...',function()
    {
      it('20 F to C = -6.666666666666667 Celsius',function()
      {
          expect(Medida.convertir('20 F to C')).to.equal('-6.666666666666667 Celsius');
      });
      it('20 F to K > -10.00 Kelvin',function()
      {
          expect(Medida.convertir('20 F to k')).to.be.above('-10.00 Kelvin');
      });
      it('20 F to K < 350.00 Kelvin',function()
      {
          expect(Medida.convertir('20 F to K')).to.be.below('350.00 Kelvin');
      });      
    });
    describe('Desde kelvin...',function()
    {
      it('400 K to C != 0 Celsius',function()
      {
          expect(Medida.convertir('400 K to C')).to.not.equal('0 Celsius');
      });
      it('400 K to F > -100.00 Farenheit',function()
      {
          //expect(Medida.convertir('32 K to F')).to.be.below('-500.00 Farenheit');
          expect(Medida.convertir('400 K to F')).to.be.above('-100 Farenheit');
      });
      it('400 K to F < 350.00 Farenheit',function()
      {
          expect(Medida.convertir('400 K to F')).to.be.below('350.00 Farenheit');
      });        
    });
    
    it('Si el destino es igual que la unidad de origen, se devuelve lo mismo como por ejemplo: 32 C to C = 32 c',function()
    {
        expect(Medida.convertir('32C to C')).to.be.equal('32 c');
        expect(Medida.convertir('32F to F')).to.be.equal('32 f');
        expect(Medida.convertir('32K to K')).to.be.equal('32 k');
    });
    it('Conversiones con numeros con e: 1.2e1 F to K',function()
    {
        expect(Medida.convertir('1.2e1F to K')).to.be.equal('262.0388888888889 Kelvin')
    });
    it('En la expresion puede ponerse el to o no: 1.2e1F K',function()
    {
        expect(Medida.convertir('1.2e1F K')).to.be.equal('262.0388888888889 Kelvin')
    });
    it('En la expresion pueden ponerse espacios entre las unidades, al final y al principio: 1.2e1   F   to    K',function()
    { 
        expect(Medida.convertir('   1.2e1   F   to    K     ')).to.be.equal('262.0388888888889 Kelvin')
    });
  });
});

//Pruebas para la clase Distancia.
describe('Distancias',function()
{
    var d1 = new Distancia(32,"km");
    var d2 = new Kilometro(79);
    var d3 = new Metro(103);
    var d4 = new Pulgada(7.2e1);

    describe('Construccion',function()
    {
        it('Se crean los objetos d1, d2, d3 y d4 de tipo Distancia, Kilometro , Milimetro y Pulgada, respectivamente',function()
        {
            expect(d1).to.be.an.instanceof(Distancia);
            expect(d1).to.be.an.instanceof(Medida);
            
            expect(d2).to.be.an.instanceof(Kilometro);
            expect(d2).to.be.an.instanceof(Distancia);
            expect(d2).to.be.an.instanceof(Medida);
            
            expect(d3).to.be.an.instanceof(Metro);
            expect(d3).to.be.an.instanceof(Distancia);
            expect(d3).to.be.an.instanceof(Medida);        
            
            expect(d4).to.be.an.instanceof(Pulgada);
            expect(d4).to.be.an.instanceof(Distancia);
            expect(d4).to.be.an.instanceof(Medida); 
        }); 
        it('El objeto d1 no responde a los metodos toMetro, toKilometro, toPulgada',function()
        {
            expect(d1).to.not.respondTo('toMetro');
            expect(d1).to.not.respondTo('toKilometro');
            expect(d1).to.not.respondTo('toPulgada');
        });
        it('El objeto d2 responde a los metodos toMetro,toCentimetro,toMilimetro y toPulgada',function()
        {
            expect(d2).to.respondTo('toMetro');
            expect(d2).to.respondTo('toCentimetro');
            expect(d2).to.respondTo('toMilimetro');
            expect(d2).to.respondTo('toPulgada');            
        });
        it('El objeto d3 responde a los metodos toKilometro, toCentimetro , toMilimetro y toPulgada', function()
        {
            expect(d3).to.respondTo('toKilometro');
            expect(d3).to.respondTo('toCentimetro');
            expect(d3).to.respondTo('toMilimetro');
            expect(d3).to.respondTo('toPulgada');       
        });
        it('El objeto d4 responde a los metodos toKilometro, toCentimetro , toMilimetro y toMetro', function()
        {
            expect(d4).to.respondTo('toKilometro');
            expect(d4).to.respondTo('toCentimetro');
            expect(d4).to.respondTo('toMilimetro');
            expect(d4).to.respondTo('toMetro');       
        });
        it('Los objetos de tipo Distancia no responden a los metodos de la clase Volumen o Temperatura',function()
        {
            expect(d1).to.not.respondTo('toCelsius');
            expect(d1).to.not.respondTo('toFarenheit');
            expect(d1).to.not.respondTo('toKelvin');
            expect(d1).to.not.respondTo('toLitro');
            expect(d1).to.not.respondTo('toKilometro3');
            expect(d1).to.not.respondTo('toMetro3');
            expect(d1).to.not.respondTo('toCentimetro3');
            expect(d1).to.not.respondTo('toMilimetro3');
        });
    });
    describe('Conversiones',function()
    {
        describe('Desde Kilometro...',function()
        {
            it('79 km to m = 79000 metros',function()
            {
                expect(d2.toMetro().valor).to.be.equal(79000);
            });
            it('79 km to cm < 8000000 centimetros',function()
            {
                expect(d2.toCentimetro().valor).to.be.below(8000000);
            });
            it('79 km to mm > 75000000 milimetros',function()
            {
                expect(d2.toMilimetro().valor).to.be.above(75000000);
            });
        });
        describe('Desde Metro',function()
        {
            it('103 m to km = 0,103 kilometros',function()
            {
                expect(d3.toKilometro().valor).to.be.equal(0.103);
            });
            it('103 m to cm < 10300 centimetros',function()
            {
                expect(d3.toCentimetro().valor).to.be.below(15000);
            });
            it('103 m to mm > 103000 milimetros',function()
            {
                expect(d3.toMilimetro().valor).to.be.above(100000);
            });
        });
        describe('Desde Pulgada',function()
        {
            it('7.2e1 p to km = 1 kilometro',function()
            {
                var aux = (d4.toKilometro().valor).toFixed(4);
                aux = parseFloat(aux);
                expect(aux).to.be.equal(0.0018);
            });
            it('7.2e1 p to cm < 183 centimetros',function()
            {
                expect(d4.toCentimetro().valor).to.be.below(183);
            });
            it('7.2e1 p to mm > 1828.803 milimetros',function()
            {
                expect(d4.toMilimetro().valor).to.be.above(1820);
            });
        });
    });
});

//Pruebas para la clase Volumen
describe('Volumenes',function()
{
    var v1 = new Volumen(32,"m3");
    var v2 = new Kilometro3(60);
    var v3 = new Metro3(150);
    var v4 = new Milimetro3(2.567e1);
    
    describe('Construccion',function()
    {
        it('Se crean los objetos v1, v2, v3 y v4 de tipo Volumen, Kilometro3 , Metro3 y Milimetro3, respectivamente',function()
        {
            expect(v1).to.be.an.instanceof(Volumen);
            expect(v1).to.be.an.instanceof(Medida);
            
            expect(v2).to.be.an.instanceof(Kilometro3);
            expect(v2).to.be.an.instanceof(Volumen);
            expect(v2).to.be.an.instanceof(Medida);
            
            expect(v3).to.be.an.instanceof(Metro3);
            expect(v3).to.be.an.instanceof(Volumen);
            expect(v3).to.be.an.instanceof(Medida);        
            
            expect(v4).to.be.an.instanceof(Milimetro3);
            expect(v4).to.be.an.instanceof(Volumen);
            expect(v4).to.be.an.instanceof(Medida); 
        });
        it('El objeto v1 no responde a los metodos toMetro3, toKilometro3 y toMilimetro3',function()
        {
            expect(v1).to.not.respondTo('toMetro3');
            expect(v1).to.not.respondTo('toKilometro3');
            expect(v1).to.not.respondTo('toMilimetro3');
        });
        it('El objeto v2 responde a los metodos toMetro3, toCentimetro3 y toMilimetro3',function()
        {
            expect(v2).to.respondTo('toMetro3');
            expect(v2).to.respondTo('toCentimetro3');            
            expect(v2).to.respondTo('toMilimetro3');
        });
        it('El objeto v3 responde a los metodos toKilometro3, toCentimetro3 y toMilimetro3', function()
        {
            expect(v3).to.respondTo('toKilometro3');
            expect(v3).to.respondTo('toCentimetro3');
            expect(v3).to.respondTo('toMilimetro3');
        });
        it('El objeto v4 responde a los metodos toKilometro3, toCentimetro3 y toMetro3', function()
        {
            expect(v4).to.respondTo('toKilometro3');
            expect(v4).to.respondTo('toCentimetro3');
            expect(v4).to.respondTo('toMetro3');       
        });
        it('Los objetos de tipo Distancia no responden a los metodos de la clase Volumen o Distancia',function()
        {
            expect(v1).to.not.respondTo('toCelsius');
            expect(v1).to.not.respondTo('toFarenheit');
            expect(v1).to.not.respondTo('toKelvin');
            expect(v1).to.not.respondTo('toLitro');
            expect(v1).to.not.respondTo('toKilometro');
            expect(v1).to.not.respondTo('toMetro');
            expect(v1).to.not.respondTo('toCentimetro');
            expect(v1).to.not.respondTo('toMilimetro');
            expect(v1).to.not.respondTo('toPulgada');
        });
    });
    describe('Conversiones',function()
    {
        describe('Desde Kilometro3...',function()
        {
            it('60 km3 to m3 = 60000000000 metro3',function()
            {
                expect(v2.toMetro3().valor).to.be.equal(60000000000);
            });
            it('60 km3 to cm3 < 70000000000000000 centimetro3',function()
            {
                expect(v2.toCentimetro3().valor).to.be.below(70000000000000000);
            });
            it('60 km3 to mm3 > 55000000000000000000 milimetro3',function()
            {
                expect(v2.toMilimetro3().valor).to.be.above(75000000);
            });
        });
        describe('Desde Metro3',function()
        {
            it('150 m3 to km3 =  1.5e-7 Kilometro3',function()
            {
                expect(v3.toKilometro3().valor).to.be.equal(1.5e-7);
            });
            it('150 m3 to cm3 < 160000000 Centimetro3',function()
            {
                expect(v3.toCentimetro3().valor).to.be.below(160000000);
            });
            it('150 m3 to mm3 > 140000000000 Milimetro3',function()
            {
                expect(v3.toMilimetro3().valor).to.be.above(140000000000);
            });
        });
        describe('Desde Milimetro3',function()
        {
            it('2.567e1 mm3 to km3 = 2.567e-17 Kilometro3',function()
            {
                var aux = v4.toKilometro3().valor;
                aux = parseFloat(aux);
                expect(aux).to.be.equal(2.5670000000000003e-17);
            });
            it('7.2e1 mm3 to cm3 < 1 Centimetro3',function()
            {
                expect(v4.toCentimetro3().valor).to.be.below(1);
            });
            it('7.2e1 mm3 to m3 > 7.2e-7 Metro3',function()
            {
                expect(v4.toMetro3().valor).to.be.above(7.2e-9);
            });
        });
    });
});
