import {DefaultCrudRepository} from '@loopback/repository';
import {Quiz} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class QuizRepository extends DefaultCrudRepository<
  Quiz,
  typeof Quiz.prototype.id
> {
  constructor(
    @inject('datasources.Mongo') dataSource: MongoDataSource,
  ) {
    super(Quiz, dataSource);
  }
}
