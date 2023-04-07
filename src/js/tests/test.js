import Validator from '../validator';

test('test username validation situatuins', () => {
    const result1 = new Validator('a#').validateUsername();
    expect(result1).toBe(false);
    const result2 = new Validator('a').validateUsername();
    expect(result2).toBe(true);
    const result3 = new Validator('4abik').validateUsername();
    expect(result3).toBe(false);
    const result4 = new Validator('abilast45').validateUsername();
    expect(result4).toBe(false);
    const result5 = new Validator('a4-5-__a').validateUsername();
    expect(result5).toBe(true);
    const result6 = new Validator('abilast4545a').validateUsername();
    expect(result6).toBe(false);
    const result7 = new Validator('aфцt4545a').validateUsername();
    expect(result7).toBe(false);
    const result8 = new Validator('-abilast4545a').validateUsername();
    expect(result8).toBe(false);
});
