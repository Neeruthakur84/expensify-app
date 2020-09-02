import {addExpense, removeExpense, editExpense} from '../../actions/expenses'
import { TestScheduler } from 'jest'

test('should setup remove Expense action generator', () => {
    const action = removeExpense( {id : '123'})
    expect(action).toEqual( {
        type: 'REMOVE_EXPENSE',
        id: '123'
    })
});

test('should setup edit expense action generator', () => {
    const action = editExpense('123', {
        descreption: 'Test Desception',        
    })

    expect(action).toEqual( {
        type: 'EDIT_EXPENSE',
        id : '123',
        updates: {
            descreption: 'Test Desception',        
        }
    })
});

test('should setup add expenses action object with provided values', () => {
    const expenseData = {
        description  : 'Test Descreption',
        note : 'test note',
        amount : 100,
        createdAt : 0
        
    }
    const action = addExpense( expenseData )

    expect(action).toEqual( {
        type: 'ADD_EXPENSE',
        expense : {
        
            ...expenseData,
            id: expect.any(String)
        }
    })

})

test('shoul setup add expense action object for default values', () => {

    const action = addExpense(undefined)
    expect(action).toEqual( {
        type : 'ADD_EXPENSE',
        expense : {
            description  : '',
            note : '',
             amount : 0,
            createdAt : 0,
            id: expect.any(String)
        }
    })

})
