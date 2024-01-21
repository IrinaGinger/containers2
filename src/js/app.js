export default class ErrorRepository {
    errors = new Map([
        [1, 'Некорректное имя персонажа (длина должна быть от 2 до 10 символов)'],
        [2, 'Некорректный тип персонажа'],
        [3, 'Персонаж мертв'],
        [4, 'Такой персонаж в команде уже есть']
    ]);

    translate(code) {
       if (!this.errors.has(code)) {
        return 'Unknown error';
       }
       return this.errors.get(code);
    }
}