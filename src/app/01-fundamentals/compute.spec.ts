import { compute } from './compute'; //clase de codigo a probar
// suite de pruebas

describe('compute', () => {
  
  //prueba 1
  it('should return 0 if input is negative', () => {
   
   const result = compute(-1);
   expect(result).toBe(0);

   })

   // prueba 2
   it('should increment the input if it is positive', () => {
     const result = compute(1);
     expect(result).toBe(2);
   })


})

