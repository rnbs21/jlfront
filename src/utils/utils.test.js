import {validaCNPJ, asyncQueryAPI} from './utils';

test('Incomplete CNPJ invalid', () => {
	expect(validaCNPJ('123')).toBe(false);
});

test('Complete invalid CNPJ', () => {
	expect(validaCNPJ('12.312.312/3123-12')).toBe(false);
});

test('Complete valid CNPJ', () => {
	expect(validaCNPJ('08.656.247/0001-72')).toBe(true);
});

test('API CNPJ found', done => {
  function callback(data) {
    expect(data).toBe(200);
    done();
  }

  asyncQueryAPI('08656247/000172', callback);
});

test('API CNPJ not found', done => {
  function callback(data) {
    expect(data).toBe(400);
    done();
  }

  asyncQueryAPI('897174221', callback);
});


