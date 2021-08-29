import { Question } from '@/entities/question.entity';
import { User } from '@/entities/user.entity';
import {
  DeleteResult,
  EntityRepository,
  getCustomRepository,
  Repository,
  UpdateResult,
} from 'typeorm';

const LIMIT = 10;

@EntityRepository(Question)
class QuestionRepository extends Repository<Question> {
  findProductQuestionsById(
    product_id: string,
    offset: string
  ): Promise<Question[]> {
    return this.createQueryBuilder('question')
      .where('question.product_id = :product_id', { product_id: +product_id })
      .orderBy('question.createdAt', 'DESC')
      .limit(LIMIT)
      .leftJoinAndSelect(User, 'user', 'question.user_id=user.id')
      .select([
        'name',
        'title',
        'content',
        'answer',
        'secret',
        'category',
        'product_id',
        'question.id as id',
        'question.user_id as user_id',
        'question.createdAt as createdAt',
      ])
      .offset(+offset)
      .getRawMany();
  }

  findProductQuestionByUserId(
    user_id: number,
    offset: string
  ): Promise<Question[]> {
    return this.find({
      where: { user_id },
      skip: +offset,
      take: LIMIT,
      order: { createdAt: 'DESC' },
    });
  }

  findSelectedQuestiopn(id: string): Promise<Question> {
    return this.findOne({ id: +id });
  }

  findProductQuestionCountByUser(user_id: number): Promise<number> {
    return this.createQueryBuilder('question')
      .where('question.user_id = :user_id', { user_id })
      .getCount();
  }

  findProductQuestionsCountById(product_id: string): Promise<number> {
    return this.createQueryBuilder('question')
      .where('question.product_id = :product_id', { product_id: +product_id })
      .getCount();
  }

  createProductQuestion(questionInfo: Question): Promise<Question> {
    const question = this.create(questionInfo);
    return this.save(question);
  }

  deleteProductQuestion(id: string, user_id: number): Promise<DeleteResult> {
    return this.delete({ user_id, id: +id });
  }

  updateProductQuestion(
    id: number,
    newQuestion: Question
  ): Promise<UpdateResult> {
    return this.update(id, newQuestion);
  }
}

export default () => getCustomRepository(QuestionRepository);
