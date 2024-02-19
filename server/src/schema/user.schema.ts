import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email address'),
    password: string({
      required_error: 'Password is required',
    }),
  }),
});

export const loginSchema = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email address'),
    password: string({
      required_error: 'Password is required',
    }),
  }),
});

export type createUserInput = TypeOf<typeof createUserSchema>['body'];
export type loginInput = TypeOf<typeof loginSchema>['body'];
