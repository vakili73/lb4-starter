import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Quiz} from '../models';
import {QuizRepository} from '../repositories';

export class QuizController {
  constructor(
    @repository(QuizRepository)
    public quizRepository : QuizRepository,
  ) {}

  @post('/quizzes', {
    responses: {
      '200': {
        description: 'Quiz model instance',
        content: {'application/json': {schema: {'x-ts-type': Quiz}}},
      },
    },
  })
  async create(@requestBody() quiz: Quiz): Promise<Quiz> {
    return await this.quizRepository.create(quiz);
  }

  @get('/quizzes/count', {
    responses: {
      '200': {
        description: 'Quiz model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Quiz)) where?: Where,
  ): Promise<Count> {
    return await this.quizRepository.count(where);
  }

  @get('/quizzes', {
    responses: {
      '200': {
        description: 'Array of Quiz model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Quiz}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Quiz)) filter?: Filter,
  ): Promise<Quiz[]> {
    return await this.quizRepository.find(filter);
  }

  @patch('/quizzes', {
    responses: {
      '200': {
        description: 'Quiz PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() quiz: Quiz,
    @param.query.object('where', getWhereSchemaFor(Quiz)) where?: Where,
  ): Promise<Count> {
    return await this.quizRepository.updateAll(quiz, where);
  }

  @get('/quizzes/{id}', {
    responses: {
      '200': {
        description: 'Quiz model instance',
        content: {'application/json': {schema: {'x-ts-type': Quiz}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Quiz> {
    return await this.quizRepository.findById(id);
  }

  @patch('/quizzes/{id}', {
    responses: {
      '204': {
        description: 'Quiz PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() quiz: Quiz,
  ): Promise<void> {
    await this.quizRepository.updateById(id, quiz);
  }

  @put('/quizzes/{id}', {
    responses: {
      '204': {
        description: 'Quiz PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() quiz: Quiz,
  ): Promise<void> {
    await this.quizRepository.replaceById(id, quiz);
  }

  @del('/quizzes/{id}', {
    responses: {
      '204': {
        description: 'Quiz DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quizRepository.deleteById(id);
  }
}
