import { number, object, string, TypeOf } from 'zod';

export const createProductSchema = object({
  body: object({
    id: number().nullish(),
    name: string({
      required_error: 'Name is required',
    }),
    image: string(),
    category: string({
      required_error: 'Category is required',
    }),
    newPrice: string({
      required_error: 'New price is required',
    }),
    oldPrice: string({
      required_error: 'Old price is required',
    }),
  }),
});

export const removeProductSchema = object({
  params: object({
    id: string({
      required_error: 'ID is required',
    }),
  }),
});

export type createProductInput = TypeOf<typeof createProductSchema>['body'];
export type removeProductInput = TypeOf<typeof removeProductSchema>['params'];
