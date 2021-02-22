/* eslint-disable jest/valid-title */
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Task from './Task';

describe('Task component', () => {
    afterEach(() => jest.clearAllMocks());

    test(`
            Given the required props, 
            When the component is rendered. 
            Then the task text should be present.`, () => {
                
                const requiredTaskProps = {
                    id:'001', 
                    text:'This is a task', 
                    complete: false, 
                    deleteTask: () => {}
                }

                render(<Task {...requiredTaskProps}/>)

                expect(screen.getByText('This is a task')).toBeInTheDocument();
            });

    test(`
            Given the required props, 
            When the component is rendered,
            Then the delete button should be present`, () => {
                
                const requiredTaskProps = {
                    id:'001', 
                    text:'This is a task', 
                    complete: false, 
                    deleteTask: () => {}
                }

                render(<Task {...requiredTaskProps}/>)

                expect(screen
                    .getAllByRole('button')
                    .find(button => button.textContent === 'Delete'))
                    .toBeInTheDocument();

                expect(screen
                    .getAllByRole('button')
                    .filter(button => button.textContent === 'Delete')
                    .length)
                    .toBe(1);

            });

    test(`
            Given a completed task, 
            When the component is rendered,
            Then the complete button should not be present`, () => {

                const completedTaskProps = {
                    id:'001', 
                    text:'This is a task', 
                    complete: true, 
                    deleteTask: () => {}
                }

                render(<Task {...completedTaskProps}/>)

                expect(screen
                    .getAllByRole('button')
                    .filter(button => button.textContent === 'Complete')
                    .length)
                    .toBe(0)
            });

    test(`
            Given an incomplete task, 
            When the component is rendered,
            Then the complete button should be present`, () => {

                const incompleteTaskProps = {
                    id:'001', 
                    text:'This is a task', 
                    complete: false, 
                    deleteTask: () => {}
                }

                render(<Task {...incompleteTaskProps}/>)

                expect(screen
                    .getAllByRole('button')
                    .filter(button => button.textContent === 'Complete')
                    .length)
                    .toBe(1)
            });

    test(`
            Given a task is rendered, 
            When the delete button is clicked,
            Then the deleteTask function is called with the correct id`, () => {

                const mockDeleteFunction = jest.fn();

                const testTaskId = '001';

                const requiredTaskProps = {
                    id:testTaskId, 
                    text:'This is a task', 
                    complete: false, 
                    deleteTask: mockDeleteFunction
                }

                render(<Task {...requiredTaskProps}/>)

                const deleteButton = screen.getAllByRole('button').find(button => button.textContent === 'Delete');

                userEvent.click(deleteButton);

                expect(mockDeleteFunction).toBeCalled();
                expect(mockDeleteFunction).toBeCalledWith(testTaskId);
                expect(mockDeleteFunction).toHaveBeenCalled();
                expect(mockDeleteFunction).toHaveBeenCalledWith(testTaskId);

            });
    
   
});