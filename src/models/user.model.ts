import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  code: string;

  @property({
    type: 'number',
  })
  score?: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  quizzes?: string[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  campaigns?: object[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  partners?: string[];

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
