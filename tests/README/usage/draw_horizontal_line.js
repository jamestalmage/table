import table from './../../../src';
import expectTable from './expectTable';

describe('README.md usage/', () => {
    it('usage/draw_horizontal_line', () => {
        let data,
            options,
            output;

        data = [
            ['0A', '0B', '0C'],
            ['1A', '1B', '1C'],
            ['2A', '2B', '2C'],
            ['3A', '3B', '3C'],
            ['4A', '4B', '4C']
        ];

        options = {
            /**
             * @typedef {Function} drawJoin
             * @param {number} index
             * @param {number} size
             * @returns {boolean}
             */
            drawHorizontalLine: (index, size) => {
                return index === 0 || index === 1 || index === size - 1 || index === size;
            }
        };

        output = table(data, options);

        // console.log(output);

        /* eslint-disable no-restricted-syntax */
        expectTable(output, `
╔════╤════╤════╗
║ 0A │ 0B │ 0C ║
╟────┼────┼────╢
║ 1A │ 1B │ 1C ║
║ 2A │ 2B │ 2C ║
║ 3A │ 3B │ 3C ║
╟────┼────┼────╢
║ 4A │ 4B │ 4C ║
╚════╧════╧════╝
        `);
        /* eslint-enable no-restricted-syntax */
    });
});
