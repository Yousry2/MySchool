import { Quiz } from '../dto/quiz';
import { FieldBase } from '../dto/fields/field-base';

export const FIELDS: FieldBase<any>[] =
    [{
        key: 'color',
        label: 'color',
        controlType: 'dropdown',
        required: false,
        options: [
            { key: 'primary', value: 'Primary' },
            { key: 'warn', value: 'Warn' },
            { key: 'pink', value: 'Pink' },
            { key: 'blue', value: 'Blue' }
        ],
        order: 3,
        dependant: 'firstName',
        quizId: 1
    },


    {
        key: 'dark',
        label: 'Dark',
        controlType: 'checkbox',
        required: false,
        order: 4,
        quizId: 1
    },

    {
        key: 'firstName',
        label: 'First name',
        controlType: 'textbox',
        required: true,
        order: 1,
        quizId: 1
    },

    {
        key: 'price',
        label: 'Price',
        required: true,
        controlType: 'number',
        order: 2,
        quizId: 1
    },




    {
        key: 'theme',
        label: 'Theme',
        controlType: 'dropdown',
        required: false,
        options: [
            { key: 'primary', value: 'Primary' },
            { key: 'warn', value: 'Warn' },
            { key: 'pink', value: 'Pink' },
            { key: 'blue', value: 'Blue' }
        ],
        order: 1,
        dependant: 'firstName',
        quizId: 2
    },


    {
        key: 'added',
        label: 'Added',
        controlType: 'checkbox',
        required: false,
        order: 9,
        quizId: 2
    },

    {
        key: 'lastName',
        label: 'Last name',
        controlType: 'textbox',
        required: false,
        order: 2,
        quizId: 2
    },


    {
        key: 'wall color',
        label: 'Wall Color',
        controlType: 'dropdown',
        required: true,
        options: [
            { key: 'primary', value: 'Primary' },
            { key: 'warn', value: 'Warn' },
            { key: 'pink', value: 'Pink' },
            { key: 'blue', value: 'Blue' }
        ],
        order: 5,
        dependant: 'firstName',
        quizId: 3
    },


    {
        key: 'register',
        label: 'Register',
        controlType: 'checkbox',
        required: false,
        order: 7,
        quizId: 3
    },

    {
        key: 'address',
        label: 'Address',
        controlType: 'textbox',
        required: true,
        order: 1,
        quizId: 6
    },

    {
        key: 'age',
        label: 'Age',
        required: false,
        controlType: 'number',
        order: 2,
        quizId: 3
    },


    {
        key: 'background',
        label: 'color',
        controlType: 'dropdown',
        required: false,
        options: [
            { key: 'primary', value: 'Primary' },
            { key: 'warn', value: 'Warn' },
            { key: 'pink', value: 'Pink' },
            { key: 'blue', value: 'Blue' }
        ],
        order: 1,
        dependant: 'firstName',
        quizId: 4
    },


    {
        key: 'matter',
        label: 'Does is matter',
        controlType: 'checkbox',
        required: false,
        order: 8,
        quizId: 4
    },

    {
        key: 'name',
        label: 'name',
        controlType: 'textbox',
        required: true,
        order: 3,
        quizId: 4
    },

    {
        key: 'number',
        label: 'Nuber',
        required: false,
        controlType: 'number',
        order: 6,
        quizId: 4
    }




















    ];
