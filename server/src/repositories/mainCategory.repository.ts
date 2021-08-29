import { MainCategory } from '@/entities/mainCategory.entity';
import {
  createQueryBuilder,
  EntityRepository,
  getCustomRepository,
  Repository,
} from 'typeorm';

@EntityRepository(MainCategory)
class CateogryRepository extends Repository<MainCategory> {
  getMainCategories() {
    return this.find();
  }

  getCategories() {
    return createQueryBuilder('main_category')
      .innerJoinAndSelect('main_category.sub_categoty_id', 'sub_categoty')
      .getMany();
  }
}

export default () => getCustomRepository(CateogryRepository);
