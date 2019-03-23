import { Entity, model, property } from '@loopback/repository';

@model()
export class Quiz extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'boolean',
    required: true,
  })
  status?: boolean;

  @property({
    type: 'string',
    required: true,
  })
  startDate: string;

  @property({
    type: 'string',
    required: true,
  })
  endDate: string;

  @property({
    type: 'string',
    required: true,
  })
  file: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  questions: object[];


  constructor(data?: Partial<Quiz>) {
    super(data);
  }
}
