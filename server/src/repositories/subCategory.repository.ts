import { SubCategory } from '@/entities/subCategory.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

@EntityRepository(SubCategory)
class CateogryRepository extends Repository<SubCategory> {
  getSubCategories() {
    return this.find();
  }
}

export default () => getCustomRepository(CateogryRepository);
