import ErrorRepository from '../app';

const errorRepo = new ErrorRepository();

test('Получение описания ошибки по коду, имеющемуся в коллекции', () => {
    const codeForTranslate = 2;
    const correct = 'Некорректный тип персонажа';

    expect(errorRepo.translate(codeForTranslate)).toBe(correct);
});

test('Возврат сообщения об ошибке, если код отсутствует в коллекции', () => {
    expect(errorRepo.translate(111)).toBe('Unknown error');
});