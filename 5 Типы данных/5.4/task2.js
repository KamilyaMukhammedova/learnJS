const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[styles.length / 2] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');
console.log(styles);