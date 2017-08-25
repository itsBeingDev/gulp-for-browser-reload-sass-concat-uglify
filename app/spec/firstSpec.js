describe('multiplicatorTest', function(){

  var multiplicatorInstant = new multiplicator();

  it('should multiply two no. together', function(){
    expect(multiplicatorInstant.multiply(5,5)).toBe(25);
  });

  it('should return 0', function(){
    expect(multiplicatorInstant.multiply(3,0)).toBe(0);
  });

});

